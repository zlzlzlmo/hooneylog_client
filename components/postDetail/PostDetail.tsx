/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import dynamic from 'next/dynamic';

import { SanityPostBody } from 'ts/interface/post';
import { dateFormat } from 'util/common';
import { PortableText } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './PostDetail.module.scss';

interface PostDetailProps {
  body: SanityPostBody[];
  title: string;
  createdAt: string;
  authorName: string;
  category: string;
}

const PostDetail = ({ body, title, createdAt, authorName, category }: PostDetailProps) => {
  const components = {
    types: {
      code: ({ value }: any) => <SyntaxHighlighter language="typescript">{value.code}</SyntaxHighlighter>,
    },
  };

  return (
    <article className={styles.container}>
      <span className={styles.category}>{category}</span>
      <h1 className={styles.title}>{title}</h1>
      <section className={styles.sub_info}>
        <span className={styles.author}>{authorName}</span>
        <span>{dateFormat(createdAt)}</span>
      </section>
      <main className={styles.main_content}>
        <PortableText components={components} value={body} />
      </main>
    </article>
  );
};

export default PostDetail;
