/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */
import NotionBlock from 'components/elements/notionBlock/NotionBlock';
import React, { Fragment } from 'react';
import styles from './PostBlock.module.scss';

interface PostBlocksProps {
  blocks: any;
}

const PostBlocks = ({ blocks }: PostBlocksProps) => {
  return (
    <main className={styles.main_content}>
      {blocks.map((block: any) => (
        <Fragment key={block.id}>
          <NotionBlock block={block} />
        </Fragment>
      ))}
    </main>
  );
};

export default PostBlocks;
