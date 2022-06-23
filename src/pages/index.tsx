/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import NotionApi, { NotionPost } from 'api/notion/notionApi';
import CategoryList from 'components/blocks/categoryList/CategoryList';
import PostItemList from 'components/blocks/postItemList/PostItemList';
import Introduction from 'components/completions/home/introduction/Introduction';
import Layout from 'components/templates/layout/Layout';
import useReduxData from 'hooks/useReduxData';
import { useState, useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setNotionList, setFilteredPostList } from 'redux/modules/post';

interface HomepageProps {
  notionList: NotionPost[];
}

const HomePage = ({ notionList }: HomepageProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const { originalNotionList } = useReduxData();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const categoryList = notionList.map(({ category }) => category);
    setCategories(categoryList);
    dispatch(setNotionList(notionList));
    dispatch(setFilteredPostList(notionList));
  }, []);

  return (
    <>
      <Head>
        <title>Hooney Blog</title>
      </Head>
      <Layout>
        <div>
          <Introduction />
          <CategoryList categories={categories} />
          <PostItemList />
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notionList = await new NotionApi().getAllPost();
  return {
    props: {
      notionList,
    },
    revalidate: 1,
  };
};

export default HomePage;
