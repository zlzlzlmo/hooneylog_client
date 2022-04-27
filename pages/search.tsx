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

interface SearchPageProps {
  notionList: INotionPost[];
}

const search = ({ notionList }: SearchPageProps) => {
  const [postList, setPostList] = useState<INotionPost[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();

    const searchInstance = new SearchController(notionList);
    const filteredList = searchInstance.getFilteredList(value);

    // const post = notionList.filter(({ properties }) => {
    //   const text = properties.이름.title[0].plain_text.replaceAll(' ', '').toLowerCase();
    //   const description = properties.description.rich_text[0].plain_text.toLowerCase();

    //   const tagList = properties.tag.multi_select.find((tag) => {
    //     return tag.name.replaceAll(' ', '').toLowerCase().indexOf(value) !== -1;
    //   });

    //   return text.indexOf(value) !== -1 || description.indexOf(value) !== -1 || tagList != null;
    // });
    value.length > 0 ? setIsTyping(true) : setIsTyping(false);
    setPostList(filteredList);
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
                <PostLength length={postList.length} />
                <PostList notionList={postList} />
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
