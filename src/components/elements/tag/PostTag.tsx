import React from 'react';
import styled from 'styled-components';
import { moveTagName } from 'styles/keyframes';
import { colors } from 'styles/variables';
import { TagProps } from '.';

const Tag = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 1.5rem;
  background-color: ${colors.subColor};
  color: ${colors.whiteColor};
  height: 2.6rem;
  line-height: 2.6rem;
  padding: 0 2rem 0 2.3rem;
  cursor: pointer;
  border-radius: 0.3rem 0 0 0.3rem;
  position: relative;
  &:hover {
    display: inline-block;
    background-color: ${colors.mainColor};
    animation: ${moveTagName} 1.5s linear infinite;
    &::after {
      border-left: 1rem solid ${colors.mainColor};
    }
  }

  &::before {
    content: '';
    top: 1rem;
    left: 1rem;
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 1rem;
    background: ${colors.whiteColor};
    box-shadow: inset 0 0.1rem rgb(0 0 0 / 25%);
  }

  &::after {
    border-left: 1rem solid ${colors.subColor};
    content: '';
    position: absolute;
    right: -1rem;
    top: 0;
    border-bottom: 1.3rem solid transparent;
    border-top: 1.3rem solid transparent;
    transition: background 0.3s, color 0.3s;
  }
`;

const PostTag = (props: TagProps) => {
  return <Tag>{props.children}</Tag>;
};

export default PostTag;
