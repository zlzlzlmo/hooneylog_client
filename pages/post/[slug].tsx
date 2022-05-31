/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-useless-fragment */
import FbComment from 'components/comment/FbComment';
import Content from 'components/layout/content/Content';
import Layout from 'components/layout/Layout';
import PostDetail from 'components/postDetail/PostDetail';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import React, { useEffect } from 'react';
import { NotionPost } from 'ts/interface/notion';
import NotionService from 'util/notion';
import Post from 'util/post';
import PreviosPost from 'components/linkAnotherPost/PreviosPost';
import NextPost from 'components/linkAnotherPost/NextPost';
import { useAppDispatch } from 'redux/configStore';
import { setNotionList } from 'redux/modules/post';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';

interface PostDetailPageProps {
  notionList: NotionPost[];
  page: NotionPost;
  blocks: any;
}
const PostDetailPage = ({ notionList, page, blocks }: PostDetailPageProps) => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNotionList(notionList));
  }, []);

  if (router.isFallback) {
    return <></>;
  }

  const { previosPost, nextPost } = new Post(notionList, page);

  return (
    <Layout>
      <Head>
        <meta property="og:image" content={BACKGROUND_MAIN_IMAGE} />
        <meta property="og:description" content={page.title} />
        <meta property="fb:app_id" content="&#123;540132141049632&#125;" />

        <title>Hooney Blog - {page.title}</title>
      </Head>
      <div>
        <Content>
          <PostDetail
            postId={page.id}
            title={page.title}
            createdAt={page.createdAt}
            category={page.category}
            tags={page.tags}
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
  const notionList = await NotionService.getAllPost();

  const slugs = notionList.map(({ id }) => ({
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

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const notionList = await NotionService.getAllPost();
  const page = await NotionService.getPostById(slug);
  const blocks = await NotionService.getBlocksById(slug);

  return {
    props: {
      notionList,
      page,
      blocks,
    },
    revalidate: 1,
  };
};

export default PostDetailPage;
