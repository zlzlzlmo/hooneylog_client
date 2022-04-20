/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import PortableText from 'react-portable-text';
import { urlFor } from 'sanity/config';
import { SanityPostBody } from 'ts/interface/post';
import { dateFormat } from 'util/common';
import styles from './PostDetail.module.scss';

interface PostDetailProps {
  body: SanityPostBody[];
  title: string;
  createdAt: string;
  authorName: string;
}
const PostDetail = ({ body, title, createdAt, authorName }: PostDetailProps) => {
  return (
    <article className={styles.container}>
      <span className={styles.category}>Typescript</span>
      <h1 className={styles.title}>{title}</h1>
      <section className={styles.sub_info}>
        <span className={styles.author}>{authorName}</span>
        <span>{dateFormat(createdAt)}</span>
      </section>
      <main className={styles.main_content}>
        <PortableText
          projectId={process.env.NEXT_PUBLIC_SANITY_DATASET}
          dataset={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          content={body}
          serializers={{
            image: (props: any) => <img src={urlFor({ ...props }).url()} alt="게시글 이미지" />,
          }}
        />
      </main>
    </article>
  );
};

export default PostDetail;
