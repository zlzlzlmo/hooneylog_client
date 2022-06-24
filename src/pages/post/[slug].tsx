/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';
import { GetStaticProps } from 'next/types';
import React from 'react';
import NotionApi, { NotionPost } from 'api/notion/notionApi';
import MoveToAnotherPost from 'components/blocks/moveToAnotherPost/MoveToAnotherPost';
import Layout from 'components/templates/layout/Layout';
import { useRouter } from 'next/router';
import PostDetailInfo from 'components/blocks/postDetail/info/PostDetailInfo';
import PostBlocks from 'components/blocks/postBlocks/PostBlock';

interface Props {
  notionList: NotionPost[];
  notionPost: NotionPost;
  blocks: any;
}
const PostDetailPage = ({ notionList, notionPost, blocks }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <></>;
  }

  return (
    <>
      <Head>
        <meta property="og:description" content={notionPost?.title} />
        <title>Hooney Blog - {notionPost?.title}</title>
      </Head>
      <Layout>
        <PostDetailInfo title={notionPost.title} createdAt={notionPost.createdAt} tags={notionPost.tags} />
        <PostBlocks blocks={blocks} />
        <MoveToAnotherPost notionList={notionList} notionPost={notionPost} />
        {/* <FbComment slug={slug} /> */}
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const notionList = await new NotionApi().getAllPost();

  const slugs = notionList.map(({ id }) => ({
    params: { slug: id },
  }));

  return {
    paths: slugs,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
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

  const notionApi = new NotionApi();
  const notionPost = await notionApi.getOnePostById(slug);

  if (!notionPost) {
    return {
      notFound: true,
    };
  }

  const notionList = await notionApi.getAllPost();
  const blocks = await notionApi.getBlocksById(slug);

  return {
    props: {
      notionList,
      notionPost,
      blocks,
    },
    revalidate: 1,
  };
};

export default PostDetailPage;
