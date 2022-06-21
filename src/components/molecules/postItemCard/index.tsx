/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import LinkToDetail from 'components/atoms/linkToDetail';
import PostDescription from 'components/atoms/postDescription';
import PostImage from 'components/atoms/postImage';
import PostTagList from 'components/molecules/postTagList';
import Link from 'next/link';
import React from 'react';
import { Tag } from 'ts/interface/notion';
import styled from 'styled-components';
import { showArticle } from 'styles/keyframes';
import Typography from 'components/elements/typography';
import usePostItem from './usePostItem';

interface PostItemProps {
  title: string;
  createdAt: string;
  id: string;
  category: string;
  description: string;
  tags: Tag[];
}

const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 3rem;
  animation: ${showArticle} 0.6s;
`;

const Content = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const PostItem = ({ title, createdAt, id, category, description, tags }: PostItemProps) => {
  const { singleCategory, timeToShow, articleRef } = usePostItem(category);

  // if (!timeToShow) {
  //   return (
  //     <Link href={`post/${id}`} passHref>
  //       <a ref={articleRef} />
  //     </Link>
  //   );
  // }

  return (
    <Container>
      <PostImage width="100%" src={singleCategory.categoryImageSrc} alt={category} />
      <Content>
        <Link href={`post/${id}`} passHref>
          <a>
            <Typography typoType="POST_TITLE">{title}</Typography>
          </a>
        </Link>

        <Typography typoType="DATE">{createdAt}</Typography>
        <PostTagList tags={tags} />
        <PostDescription description={description} />
        <LinkToDetail postId={id} text="Read More" />
      </Content>
    </Container>
  );
};

export default PostItem;
