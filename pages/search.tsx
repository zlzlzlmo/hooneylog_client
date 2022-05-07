/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import Layout from 'components/layout/Layout';
import Search from 'components/search/Search';
import Head from 'next/head';
import React, { ChangeEvent, useState } from 'react';
import { debounce } from 'lodash';
import PostLength from 'components/common/PostLength/PostLength';
import Content from 'components/layout/content/Content';
import PostList from 'components/posts/PostList';
import { GetStaticProps } from 'next';
import NotionService from 'util/notion';
import { INotionPost } from 'ts/interface/notion';
import SearchController from 'util/search';
import { makeTextToFilter } from 'util/common';
import { useAppDispatch, useAppSelector } from 'redux/configStore';
import { getFilteredNotionList, setFilteredPostList } from 'redux/modules/post';
import useHandleReduxData from 'hooks/useHandleReduxData';

interface SearchPageProps {
  notionList: INotionPost[];
}

const search = ({ notionList }: SearchPageProps) => {
  const { originialNotionList } = useHandleReduxData();
  originialNotionList(notionList);
  const dispatch = useAppDispatch();
  const filteredNotionList = useAppSelector(getFilteredNotionList);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const value = makeTextToFilter(e.target.value);
    value.length > 0 ? setIsTyping(true) : setIsTyping(false);

    const searchInstance = new SearchController(notionList);
    const filteredList = searchInstance.getFilteredList(value);

    dispatch(setFilteredPostList(filteredList));
  }, 200);

  return (
    <>
      <Head>
        <title>Hooney Blog</title>
      </Head>
      <Layout>
        <div>
          <Search handleChange={handleChange} />
          <Content>
            {isTyping && (
              <>
                <PostLength length={filteredNotionList.length} />
                <PostList />
              </>
            )}
          </Content>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notionInstance = new NotionService();
  const notionList = await notionInstance.getDatabase();

  return {
    props: {
      notionList,
    },
    revalidate: 1,
  };
};
export default search;
