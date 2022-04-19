/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Post } from 'ts/interface/post';
import PostItem from './postItem/PostItem';
import styles from './PostList.module.scss';

interface PostListProps {
  postList: Post[];
}

const PostList = ({ postList }: PostListProps) => {
  return (
    <section className={styles.container}>
      {postList.map(({ title, _createdAt, mainImage, body }, index) => (
        <PostItem key={index} title={title} createAt={_createdAt} mainImage={mainImage} body={body} />
      ))}
    </section>
  );
};

export default PostList;
