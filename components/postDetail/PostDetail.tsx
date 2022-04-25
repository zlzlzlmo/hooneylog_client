/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { SanityPostBody } from 'ts/interface/post';
import { dateFormat } from 'util/common';
import { PortableText } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { urlFor } from 'sanity/config';
import CategoryManager from 'util/category';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './PostDetail.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface PostDetailProps {
  body: SanityPostBody[];
  title: string;
  createdAt: string;
  authorName: string;
  category: string;
  authorImage: object;
}

const PostDetail = ({ body, title, createdAt, authorName, category, authorImage }: PostDetailProps) => {
  const categoryInstance = new CategoryManager(category);
  const components = {
    types: {
      image: (props: any) => (
        <div className={styles.img_box}>
          <LazyLoadImage effect="blur" src={urlFor(props.value).url()} alt={`${title}의 이미지`} />
        </div>
      ),
      code: ({ value }: any) => <SyntaxHighlighter language="typescript">{value.code}</SyntaxHighlighter>,
    },
  };

  return (
    <article className={styles.container}>
      {categoryInstance.categoryColorToShow && (
        <span className={styles.category} style={{ backgroundColor: categoryInstance.categoryColorToShow }}>
          {categoryInstance.categoryLetterToShow}
        </span>
      )}
      <h1 className={styles.title}>{title}</h1>
      <section className={styles.sub_info}>
        <span className={styles.author}>
          <span className={styles.profile_img}>
            <LazyLoadImage src={urlFor(authorImage).url()} alt="프로필 이미지" />
          </span>
          <span className={styles.name}> By {authorName}</span>
        </span>
        <span className={styles.reg_date}>- {dateFormat(createdAt)}</span>
      </section>
      <main className={styles.main_content}>
        <PortableText components={components} value={body} />
      </main>
    </article>
  );
};

export default PostDetail;
