import FlexContainer from 'components/templates/container/FlexContainer';
import InnerContainer from 'components/templates/container/InnerContainer';
import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, widths } from 'styles/variables';
import SearchForm from './searchForm/SearchForm';

const Container = styled.header`
  width: 100vw;
  height: 6rem;
  color: #fff;
  background-color: ${colors.mainColor};

  @media (max-width: ${widths.mobileMax}) {
    padding: 0 5%;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  user-select: none;
  font-weight: 700;
  font-size: min(max(2.5rem, 3vw), 2rem);
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <FlexContainer alignItems="center" height="100%" justifyContent="space-between">
          <Logo>HooneyLog</Logo>
          <SearchForm />
        </FlexContainer>
      </InnerContainer>
    </Container>
  );
};

export default Header;
