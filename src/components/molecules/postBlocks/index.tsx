/* eslint-disable @typescript-eslint/no-explicit-any */
import NotionBlock from 'components/elements/notionBlock/notionBlock';
import React, { Fragment } from 'react';
import styles from './index.module.scss';

interface Props {
  blocks: any;
}

const PostBlocks = ({ blocks }: Props) => {
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
