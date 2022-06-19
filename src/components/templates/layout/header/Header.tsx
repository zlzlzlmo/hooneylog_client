import FlexContainer from 'components/templates/container/FlexContainer';
import InnerContainer from 'components/templates/container/InnerContainer';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const Container = styled.header`
  width: 100vw;
  height: 6rem;
  color: #fff;
  background-color: ${colors.mainColor};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  font-weight: 700;
  font-size: min(max(2.5rem, 3vw), 2rem);
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <FlexContainer alignItems="center" height="100%">
          <Logo>HooneyLog :)</Logo>
        </FlexContainer>
      </InnerContainer>
    </Container>
  );
};

export default Header;
