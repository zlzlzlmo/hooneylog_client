/* eslint-disable import/named */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PostImage from 'components/atoms/postImage';
import Link from 'next/link';
import React from 'react';
import { ITag } from 'ts/interface/notion';
import styled from 'styled-components';
import { showArticle } from 'styles/keyframes';
import Typography from 'components/elements/typography';
import TagGroup from 'components/blocks/tagGroup/TagGroup';

interface PostItemProps {
  title: string;
  createdAt: string;
  id: string;
  category: string;
  description: string;
  tags: ITag[];
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
  // const { singleCategory, timeToShow, articleRef } = usePostItem(category);

  // if (!timeToShow) {
  //   return (
  //     <Link href={`post/${id}`} passHref>
  //       <a ref={articleRef} />
  //     </Link>
  //   );
  // }

  return (
    <Container>
      {/* <PostImage width="100%" src={''} alt={category} /> */}
      <div>이미지 넣어야함</div>
      <Content>
        <Link href={`post/${id}`} passHref>
          <a>
            <Typography typoType="POST_TITLE">{title}</Typography>
          </a>
        </Link>

        <Typography typoType="DATE">{createdAt}</Typography>
        <TagGroup tags={tags} />
        <Typography typoType="POST_DESC">{description}</Typography>
        <Link href={`post/${id}`} passHref>
          <a>
            <Typography typoType="READ_MORE">Read More</Typography>
          </a>
        </Link>
      </Content>
    </Container>
  );
};

export default PostItem;