import Image from 'components/elements/image';
import FlexContainer from 'components/templates/container/FlexContainer';
import InnerContainer from 'components/templates/container/InnerContainer';
import React from 'react';
import styled from 'styled-components';
import { colors, widths } from 'styles/variables';

const Container = styled.div`
  /* background-color: ${colors.lightGreyColor}; */
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1``;

const SubTitle = styled.p`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.54);
`;

const DynamicContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: ${widths.mobileMax}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Introduction = () => {
  return (
    <Container>
      <InnerContainer>
        <DynamicContainer>
          <Image imageType="PROFILE" borderRadius="50%" />
          <FlexContainer flexDirection="column">
            <Title>신승훈 블로그</Title>
            <SubTitle>기록과 함께 성장해 나가는 한 프론트엔드개발자의 이야기</SubTitle>
          </FlexContainer>
        </DynamicContainer>
      </InnerContainer>
    </Container>
  );
};

export default Introduction;
