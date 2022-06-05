/* eslint-disable @typescript-eslint/no-explicit-any */
import Block from 'components/atoms/block';
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
          <Block block={block} />
        </Fragment>
      ))}
    </main>
  );
};

export default PostBlocks;
