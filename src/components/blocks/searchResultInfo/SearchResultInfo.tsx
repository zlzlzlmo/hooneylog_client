import useSearchResultinfo from 'components/blocks/searchResultInfo/useSearchResultInfo';
import React from 'react';
import styled from 'styled-components';
import { Colors } from 'styles/variables';

const SearchedBox = styled.div`
  margin: 2rem 0;
`;

const TextContainer = styled.div`
  margin: 1rem 0;
`;

const Text = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: ${Colors.subColor};
`;

const GreyText = styled(Text)`
  color: ${Colors.mainColor};
`;

const SearchResultInfo = () => {
  const { searchParamKey, searchParamValue } = useSearchResultinfo();

  return (
    <SearchedBox>
      <TextContainer>
        <Text>
          <GreyText> Results for</GreyText> {searchParamValue} By {searchParamKey}
        </Text>
      </TextContainer>
    </SearchedBox>
  );
};

export default SearchResultInfo;
