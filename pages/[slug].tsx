/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import FbComment from 'components/comment/FbComment';
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';
import Layout from 'components/layout/Layout';
import PostDetail from 'components/postDetail/PostDetail';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { INotionPost } from 'ts/interface/notion';
import NotionService from 'util/notion';

interface PostDetailPageProps {
  page: INotionPost;
  blocks: any;
}
const PostDetailPage = ({ blocks, page }: PostDetailPageProps) => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { properties } = page;
  return (
    <Layout>
      <Head>
        <meta property="og:image" content={NotionService.getImageUrl(properties)} />
        <meta property="og:description" content={properties.이름.title[0].plain_text} />
        <meta property="fb:app_id" content="540132141049632" />
        <title>Hooney Blog - {properties.이름.title[0].plain_text}</title>
      </Head>
      <div>
        <Introduce mainImage={NotionService.getImageUrl(properties)} />
        <Content>
          <PostDetail
            title={properties.이름.title[0].plain_text}
            createdAt={properties.created_date.created_time}
            category={properties.category.multi_select[0].name}
            tag={properties.tag.multi_select}
            blocks={blocks}
          />

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
    fallback: false,
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
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};

export default PostDetailPage;
