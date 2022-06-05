/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Content from 'components/atoms/content';
import HomeSub from 'components/molecules/homeSub';
import Layout from 'components/molecules/layout';
import PostItemList from 'components/molecules/postItemList';
import useReduxData from 'hooks/useReduxData';
import React, { useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setNotionList, setFilteredPostList } from 'redux/modules/post';
import { NotionPost } from 'ts/interface/notion';
import Filter from 'util/filterByQueryParam';

interface Props {
  notionList: NotionPost[];
}

const Home = ({ notionList }: Props) => {
  const { originalNotionList } = useReduxData();
  const dispatch = useAppDispatch();

  const handleFilter = () => {
    const filter = new Filter(originalNotionList);
    dispatch(setFilteredPostList(filter.filteredList()));
  };

  useEffect(() => {
    dispatch(setNotionList(notionList));
    dispatch(setFilteredPostList(notionList));
  }, []);

  useEffect(() => {
    if (originalNotionList.length < 1) {
      return;
    }

    handleFilter();
  }, [originalNotionList]);

  return (
    <Layout>
      <div>
        <HomeSub />
        <Content padding="2rem 0">
          <PostItemList />
        </Content>
      </div>
    </Layout>
  );
};

export default Home;
