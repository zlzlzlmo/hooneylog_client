/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import useIntersectionObserver from 'hooks/useIntersection';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SanityPost } from 'ts/interface/post';
import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';
import PostItem from './postItem/PostItem';
import styles from './PostList.module.scss';

interface PostListProps {
  postListToShow: SanityPost[];
  handlePageClick: () => void;
  isLastPost: boolean;
}

const PostList = ({ postListToShow, handlePageClick, isLastPost }: PostListProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const [firstUpdate, setFirstUpdate] = useState(true);

  useEffect(() => {
    if (postListToShow.length === 0) {
      return;
    }
    if (entry?.isIntersecting) {
      setFirstUpdate(false);
      if (!firstUpdate) {
        handlePageClick();
      }
    }
  }, [postListToShow, entry?.isIntersecting]);

  return (
    <section className={styles.container}>
      {postListToShow.map(({ title, _createdAt, mainImage, body, slug, author, category, _id }, index) => (
        <PostItem
          key={index}
          title={title}
          createAt={_createdAt}
          mainImage={mainImage}
          body={body}
          slug={slug.current}
          authorName={author.name}
          authorImage={author.image}
          category={category}
        />
      ))}

      {!isLastPost && (
        <Box className={styles.skeleton_box} padding="30" bg="white" ref={ref}>
          <Skeleton height="25rem" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      )}

      {/* {postListToShow.length < allPostListLength && (
        <Box className={styles.skeleton_box} padding="30" bg="white" ref={ref}>
          <Skeleton height="25rem" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      )} */}
    </section>
  );
};

export default PostList;
