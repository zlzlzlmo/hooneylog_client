/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PostBlocks from 'components/molecules/postBlocks';
import { ITag } from 'api/notion/notionApi';
import PostTitle from 'components/elements/typography/PostTitle';
import styles from './index.module.scss';

interface PostDetailProps {
  postId: string;
  title: string;
  createdAt: string;
  category: string;
  blocks: [{ id: string }];
  tags: ITag[];
}

const PostDetailedContents = ({ postId, title, createdAt, category, blocks, tags }: PostDetailProps) => {
  return (
    <article className={styles.container}>
      {/* <PostCategory category={category} />
      <PostTitle postId={postId} title={title} fontSize="3.5rem" margin="2rem 0" /> */}
      {/* <PostSubInfo createdAt={createdAt} postId={postId} /> */}
      {/* <PostTagList tags={tags} margin="2rem 0 0 0" /> */}
      <PostBlocks blocks={blocks} />
    </article>
  );
};

export default PostDetailedContents;
