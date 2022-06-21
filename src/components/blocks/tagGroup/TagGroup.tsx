import Tag from 'components/elements/tag';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ITag } from 'ts/interface/notion';

interface TagGroupProps {
  tags: ITag[];
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
          <Tag tagType="POST">{name}</Tag>
        </Fragment>
      ))}
    </Container>
  );
};

export default TagGroup;
