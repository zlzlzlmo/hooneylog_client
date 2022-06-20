/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-return */
import Layout from 'components/templates/layout/Layout';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { widths } from 'styles/variables';

const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  gap: 3rem;
  max-width: ${widths.maxWidth};
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  padding: 2rem;
  border-bottom: 0.1rem solid lightgray;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${widths.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const Categoryitem = styled.li`
  font-size: 1.5rem;
  white-space: nowrap;
  color: grey;
  cursor: pointer;
`;

const SearchedBox = styled.div`
  margin: 2rem 0;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 2rem;
  padding-left: 2rem;
`;

const Search = () => {
  const router = useRouter();
  const [searchType, setSearchType] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const key = query.keys().next().value;
    const value = query.values().next().value;
    setSearchType(key);
    setSearchValue(value);
    router.push(`/search?${key}=${value}`);
  }, []);
  return (
    <Layout>
      <CategoryList>
        <Categoryitem>테스트</Categoryitem>
      </CategoryList>
      <SearchedBox>
        <Text>
          Searched by {searchType} for {searchValue}
        </Text>
      </SearchedBox>
    </Layout>
  );
};

export default Search;
