/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import CategoryList from 'components/blocks/categoryList/CategoryList';
import PostItemList from 'components/blocks/postItemList/PostItemList';
import Layout from 'components/templates/layout/Layout';
import useFilterByQueryParam from 'hooks/useFilterByQueryParam';
import useReduxData from 'hooks/useReduxData';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setNotionList, setFilteredPostList } from 'redux/modules/post';
import { NotionPost } from 'ts/interface/notion';
import Introduction from './introduction/Introduction';

interface HomepageProps {
  notionList: NotionPost[];
}

const Home = ({ notionList }: HomepageProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const { handleFilterByQueryParam } = useFilterByQueryParam();
  const { originalNotionList } = useReduxData();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const categoryList = notionList.map(({ category }) => category);
    setCategories(categoryList);
    dispatch(setNotionList(notionList));
    dispatch(setFilteredPostList(notionList));
  }, []);

  useEffect(() => {
    if (originalNotionList.length < 1) {
      return;
    }

    handleFilterByQueryParam();
  }, [originalNotionList]);

  return (
    <Layout>
      <div>
        <Introduction />
        <CategoryList categories={categories} />
        <PostItemList />
      </div>
    </Layout>
  );
};

export default Home;
