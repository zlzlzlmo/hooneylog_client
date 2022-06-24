import NotionApi, { NotionPost } from 'api/notion/notionApi';
import Layout from 'components/templates/layout/Layout';
import { GetStaticProps } from 'next';
import React from 'react';
import useFilterByQueryParam from 'hooks/useFilterByQueryParam/useFilterByQueryParam';
import PostItemList from 'components/blocks/postItemList/PostItemList';
import CategoryList from 'components/blocks/categoryList/CategoryList';
import SearchResultInfo from 'components/blocks/searchResultInfo/SearchResultInfo';

interface SearchPageProps {
  notionList: NotionPost[];
}

const SearchPage = ({ notionList }: SearchPageProps) => {
  const { notionListToShow } = useFilterByQueryParam(notionList);

  return (
    <Layout>
      <SearchResultInfo />
      <CategoryList notionList={notionList} />
      <PostItemList notionList={notionListToShow} />
    </Layout>
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

export default SearchPage;
