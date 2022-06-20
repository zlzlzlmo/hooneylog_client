import React from 'react';
import styled from 'styled-components';
import { moveNameAnimation } from 'styles/mixin';
import { colors } from 'styles/variables';

interface IntroNameProps {
  text: string;
}

const Container = styled.span`
  display: inline;
  font-size: 1.7rem;
  color: ${colors.mainColor};
  font-weight: 700;
  border: 0.1rem solid ${colors.mainColor};
  padding: 0.7rem;
  background-color: ${colors.whiteColor};
  border-radius: 1rem;
  ${moveNameAnimation}
`;

const IntroName = ({ text }: IntroNameProps) => {
  return <Container>@ {text}</Container>;
};

export default IntroName;
