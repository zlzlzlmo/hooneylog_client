import React from 'react';
import styled from 'styled-components';
import { TypographyProps } from '.';

const Container = styled.h2`
  font-size: 3rem;
  margin: 2rem 0;
`;

const PostDetailTitle = (props: TypographyProps) => {
  return <Container>{props.children}</Container>;
};

export default PostDetailTitle;
