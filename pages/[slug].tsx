/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';
import Layout from 'components/layout/Layout';
import PostDetail from 'components/postDetail/PostDetail';
import { GetStaticProps } from 'next/types';
import React, { useEffect } from 'react';
import { Post } from 'ts/interface/post';
import ApiManager from 'util/api';

interface PostDetailPageProps {
  post: Post;
}
const PostDetailPage = ({ post }: PostDetailPageProps) => {
  return (
    <Layout>
      <Introduce mainImage={post.mainImage} title={post.title} />
      <Content>
        <PostDetail body={post.body} title={post.title} createdAt={post._createdAt} />
      </Content>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params == null) {
    return {
      notFound: true,
    };
  }
  const { slug } = params;

  const api = new ApiManager<Post[]>(`*[_type=="post" && slug.current == "${slug}"]`);
  const post = (await api.SanityFetch()).result[0];

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const api = new ApiManager<Post[]>(`*[_type=="post"]`);
  const postList = (await api.SanityFetch()).result;
  const slugs = postList.map(({ slug }) => ({ params: { slug: slug.current } }));
  return {
    paths: slugs,
    fallback: false,
  };
};
export default PostDetailPage;
