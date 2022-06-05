/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { NotionPost } from 'ts/interface/notion';
import NotionService from 'util/notion';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';
import PostDetail from 'components/organisms/postDetail';

interface Props {
  notionList: NotionPost[];
  notionPost: NotionPost;
  blocks: any;
}
const PostDetailPage = ({ notionList, notionPost, blocks }: Props) => {
  return (
    <>
      <Head>
        <meta property="og:image" content={BACKGROUND_MAIN_IMAGE} />
        <meta property="og:description" content={notionPost.title} />
        <meta property="fb:app_id" content="&#123;540132141049632&#125;" />
        <title>Hooney Blog - {notionPost.title}</title>
      </Head>
      <PostDetail notionList={notionList} notionPost={notionPost} blocks={blocks} />
    </>
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
  const notionPost = await NotionService.getPostById(slug);
  const blocks = await NotionService.getBlocksById(slug);

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
