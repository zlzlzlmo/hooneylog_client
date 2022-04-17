/* eslint-disable import/extensions */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from 'components/layout/Layout';
import PostList from 'components/posts/PostList';

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <PostList />
      </Layout>
    </div>
  );
};

export default Home;
