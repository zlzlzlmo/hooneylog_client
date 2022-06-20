/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Content from 'components/atoms/content';
import PostItemList from 'components/molecules/postItemList';
import Layout from 'components/templates/layout/Layout';
import useFilterByQueryParam from 'hooks/useFilterByQueryParam';
import useReduxData from 'hooks/useReduxData';
import React, { useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setNotionList, setFilteredPostList } from 'redux/modules/post';
import { NotionPost } from 'ts/interface/notion';
import Introduction from './introduction/Introduction';

interface Props {
  notionList: NotionPost[];
}

const Home = ({ notionList }: Props) => {
  const { handleFilterByQueryParam } = useFilterByQueryParam();
  const { originalNotionList } = useReduxData();
  const dispatch = useAppDispatch();

  useEffect(() => {
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
        <Content>
          <PostItemList />
        </Content>
      </div>
    </Layout>
  );
};

export default Home;
