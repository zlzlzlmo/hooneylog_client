/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-useless-fragment */
import FbComment from 'components/comment/FbComment';
import Content from 'components/layout/content/Content';
import Layout from 'components/layout/Layout';
import PostDetail from 'components/postDetail/PostDetail';
import useHandleReduxData from 'hooks/useHandleReduxData';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { INotionPost } from 'ts/interface/notion';
import NotionService from 'util/notion';
import NotionBlock from 'util/block';
import Post from 'util/post';
import PreviosPost from 'components/linkAnotherPost/PreviosPost';
import NextPost from 'components/linkAnotherPost/NextPost';

interface PostDetailPageProps {
  notionList: INotionPost[];
  page: INotionPost;
  blocks: any;
}
const PostDetailPage = ({ notionList, blocks, page }: PostDetailPageProps) => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { dispatchOriginialNotionList } = useHandleReduxData();
  dispatchOriginialNotionList(notionList);

  if (router.isFallback) {
    return <></>;
  }

  const { previosPost, nextPost } = new Post(notionList, page);
  const { properties } = page;
  const notionBlock = new NotionBlock(properties);

  return (
    <Layout>
      <Head>
        <meta property="og:image" content={NotionService.getImageUrl(properties)} />
        <meta property="og:description" content={notionBlock.title} />
        <meta property="fb:app_id" content="&#123;540132141049632&#125;" />

        <title>Hooney Blog - {notionBlock.title}</title>
      </Head>
      <div>
        <Content>
          <PostDetail
            title={notionBlock.title}
            createdAt={notionBlock.createdAt}
            category={notionBlock.category}
            tag={notionBlock.tag}
            blocks={blocks}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              margin: '3rem 0',
              gap: '2rem',
              alignItems: 'flex-end',
            }}
          >
            {previosPost && <PreviosPost previosPost={previosPost} />}
            {nextPost && <NextPost nextPost={nextPost} />}
          </div>
          <FbComment slug={slug} />
        </Content>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const notionInstance = new NotionService();
  const database = await notionInstance.getDatabase();

  const slugs = database.map(({ id }) => ({
    params: { slug: id },
  }));

  return {
    paths: slugs,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params == null) {
    return {
      notFound: true,
    };
  }

  const { slug } = params;
  const notionInstance = new NotionService();
  const notionList = await notionInstance.getDatabase();
  const page = await notionInstance.getPage(slug as string);
  const blocks = await notionInstance.getBlocks(slug as string);

  const childBlocks = await Promise.all(
    blocks
      .filter((block: any) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await notionInstance.getBlocks(block.id),
        };
      }),
  );

  const blocksWithChildren = blocks.map((block: any) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type].children = childBlocks.find((x) => x.id === block.id)?.children;
    }
    return block;
  });

  return {
    props: {
      notionList,
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};

export default PostDetailPage;
