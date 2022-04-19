/* eslint-disable consistent-return */
import { GetStaticProps, GetStaticPropsContext, PreviewData } from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect } from 'react';
import { Post } from 'ts/interface/post';
import ApiManager from 'util/api';

const PostDetailPage = ({ post }: any) => {
  useEffect(() => {
    console.log('post : ', post);
  }, []);
  return <div>dd</div>;
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
