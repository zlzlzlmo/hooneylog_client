/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-return */
import PostItemList from 'components/molecules/postItemList/PostItemList';
import Layout from 'components/templates/layout/Layout';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import CategoryList from './categoryList/CategoryList';
import useSearchQuery from './useSearchQuery';

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

const Search = () => {
  const { isValidSearchKey, searchKeyValue } = useSearchQuery();

  return (
    <Layout>
      <SearchedBox>
        <TextContainer>
          <Text>
            <GreyText> Searched By </GreyText>Category
          </Text>
        </TextContainer>
        <TextContainer>
          <Text>
            <GreyText> Results for</GreyText> search
          </Text>
        </TextContainer>
      </SearchedBox>
      <CategoryList />
      <PostItemList />
    </Layout>
  );
};

export default Search;
