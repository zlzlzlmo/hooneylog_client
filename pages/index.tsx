/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/extensions */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout/Layout';
import PostList from 'components/posts/PostList';
import { useEffect } from 'react';
import { Post } from 'ts/interface/post';
import Pagination from 'components/common/pagination/Pagintation';

interface HomePageProps {
  postList: Post[];
}
const HomePage = ({ postList }: HomePageProps) => {
  useEffect(() => {
    console.log('Test : ', postList);
  }, []);
  return (
    <div>
      <Layout>
        <PostList postList={postList} />
        <Pagination pageCount={10} handlePageClick={(data) => {}} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const query = encodeURIComponent(`*[_type=="post"]`);
  const res = await fetch(`https://e5m09ops.api.sanity.io/v2021-10-21/data/query/production?query=${query}`);
  const result = await res.json();
  const postList = result.result;

  return {
    props: {
      postList,
    },
  };
};

export default HomePage;
