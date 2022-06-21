import PostTag from 'components/atoms/postTag';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Tag } from 'ts/interface/notion';

interface TagGroupProps {
  tags: Tag[];
}

const Container = styled.div`
  display: flex;
  column-gap: 2rem;
  row-gap: 0.7rem;
  width: 100%;
  flex-wrap: wrap;
`;

const TagGroup = ({ tags }: TagGroupProps) => {
  return (
    <Container>
      {tags.map(({ name }) => (
        <Fragment key={name}>
          <PostTag tagName={name} />
        </Fragment>
      ))}
    </Container>
  );
};

export default TagGroup;
