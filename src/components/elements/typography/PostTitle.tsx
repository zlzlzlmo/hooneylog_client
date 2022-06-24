import React from 'react';
import styled from 'styled-components';
import { TypographyProps } from '.';

const Text = styled.h2`
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PostTitle = (props: TypographyProps) => {
  return <Text>{props.children}</Text>;
};

export default PostTitle;
