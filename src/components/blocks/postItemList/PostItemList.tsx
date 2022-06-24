import { NotionPost } from 'api/notion/notionApi';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import PostItem from './postItemCard/PostItem';

interface PostItemListProps {
  notionList: NotionPost[];
}

const Container = styled.main`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const PostItemList = ({ notionList }: PostItemListProps) => {
  return (
    <Container>
      {notionList.map(({ id, title, createdAt, description, category, tags }) => (
        <Fragment key={id}>
          <PostItem
            id={id}
            title={title}
            createdAt={createdAt}
            description={description}
            category={category}
            tags={tags}
          />
        </Fragment>
      ))}
    </Container>
  );
};

export default PostItemList;
