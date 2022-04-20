/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import useIntersectionObserver from 'hooks/useIntersection';
import React, { useEffect, useRef, useState } from 'react';
import { Post } from 'ts/interface/post';
import { Box, Stack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { getDeviceType } from 'util/common';
import { Device } from 'ts/enum';
import PostItem from './postItem/PostItem';
import styles from './PostList.module.scss';

interface PostListProps {
  postList: Post[];
}

const PostList = ({ postList }: PostListProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  return (
    <section className={styles.container}>
      {postList.map(({ title, _createdAt, mainImage, body, slug }, index) => (
        <PostItem
          key={index}
          title={title}
          createAt={_createdAt}
          mainImage={mainImage}
          body={body}
          slug={slug.current}
        />
      ))}

      <Box className={styles.skeleton_box} padding="30" bg="white" ref={ref}>
        <Skeleton height="25rem" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </section>
  );
};

export default PostList;
