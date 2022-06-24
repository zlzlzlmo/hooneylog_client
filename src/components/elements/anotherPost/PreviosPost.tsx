/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import { GrLinkPrevious } from 'react-icons/gr';
import Link from 'next/link';
import { AnotherPostProps } from '.';

const Container = styled.span`
  display: inline-flex;
  background-color: ${colors.subColor};
  color: ${colors.whiteColor};
  padding: 1rem 1rem;
  font-size: 1.4rem;
  border-radius: 0.7rem;
  cursor: pointer;
  text-align: left;
  gap: 1rem;
  align-items: center;
  span {
    vertical-align: text-top;
  }
`;

const PreviosPost = (props: AnotherPostProps) => {
  return (
    <Link href={`/post/${props.postItem?.id}`}>
      <a>
        <Container>
          <span>
            <GrLinkPrevious />
          </span>
          <span>{props.postItem?.title}</span>
        </Container>
      </a>
    </Link>
  );
};

export default PreviosPost;
