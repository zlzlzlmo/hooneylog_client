import NextPost from 'components/atoms/nextPost';
import PreviosPost from 'components/atoms/previosPost';
import React from 'react';
import { NotionPost } from 'ts/interface/notion';
import Post from 'util/post';
import styles from './index.module.scss';

interface Props {
  notionList: NotionPost[];
  notionPost: NotionPost;
}

const MoveToAnotherPost = ({ notionList, notionPost }: Props) => {
  const { previosPost, nextPost } = new Post(notionList, notionPost);

  return (
    <div className={styles.container}>
      {previosPost && <PreviosPost previosPost={previosPost} />}
      {nextPost && <NextPost nextPost={nextPost} />}
    </div>
  );
};

export default MoveToAnotherPost;
