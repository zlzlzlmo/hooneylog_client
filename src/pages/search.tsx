import NotionApi, { NotionPost } from 'api/notion/notionApi';
import useSearchQuery from 'components/completions/search/useSearchQuery';
import Layout from 'components/templates/layout/Layout';
import { GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import useFilterByQueryParam from 'hooks/useFilterByQueryParam/useFilterByQueryParam';
import PostItemList from 'components/blocks/postItemList/PostItemList';
import CategoryList from 'components/blocks/categoryList/CategoryList';

interface SearchPageProps {
  notionList: NotionPost[];
}

const SearchedBox = styled.div`
  margin: 2rem 0;
`;

const TextContainer = styled.div`
  margin: 1rem 0;
`;

const Text = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: ${colors.subColor};
`;

const GreyText = styled(Text)`
  color: ${colors.mainColor};
`;

const SearchPage = ({ notionList }: SearchPageProps) => {
  const { notionListToShow } = useFilterByQueryParam(notionList);
  const { searchParamKey, searchParamValue } = useSearchQuery();

  return (
    <Layout>
      <SearchedBox>
        <TextContainer>
          <Text>
            <GreyText> Results for</GreyText> {searchParamValue} By {searchParamKey}
          </Text>
        </TextContainer>
      </SearchedBox>
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
