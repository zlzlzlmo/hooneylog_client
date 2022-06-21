import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import { TypographyProps } from '.';

const Container = styled.span`
  color: ${colors.subColor};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    transition: all 0.1s ease-in-out;
  }
`;

const ReadMore = (props: TypographyProps) => {
  return <Container>{props.children}</Container>;
};

export default ReadMore;
