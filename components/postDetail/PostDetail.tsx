import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { SanityPostBody } from 'ts/interface/post';
import { dateFormat } from 'util/common';
import styles from './PostDetail.module.scss';

interface PostDetailProps {
  body: SanityPostBody[];
  title: string;
  createdAt: string;
}
const PostDetail = ({ body, title, createdAt }: PostDetailProps) => {
  return (
    <>
      <span className={styles.category}>Typescript</span>
      <h1 className={styles.title}>{title}</h1>
      <section className={styles.sub_info}>
        <span className={styles.author}>Hooney(후니)</span>
        <span>{dateFormat(createdAt)}</span>
      </section>
      <main className={styles.main_content}>
        <BlockContent blocks={body} />
      </main>
    </>
  );
};

export default PostDetail;
