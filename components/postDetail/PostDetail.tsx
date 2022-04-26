/* eslint-disable react/jsx-key */
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
import RenderBlock from 'components/notion/RenderBlock';

interface PostDetailProps {
  title: string;
  createdAt: string;
  category: string;
  body: any[];
}

const PostDetail = ({ title, createdAt, category, body }: PostDetailProps) => {
  const categoryInstance = new CategoryManager(category);
  console.log('body : ', body);
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
            <LazyLoadImage effect="blur" src="/images/profile.jpeg" alt="프로필 이미지" />
          </span>
          <span className={styles.name}> By Seunghoon</span>
        </span>
        <span className={styles.reg_date}>- {dateFormat(createdAt)}</span>
      </section>
      <main className={styles.main_content}>
        {body.map((block) => (
          <RenderBlock block={block} />
        ))}
      </main>
    </article>
  );
};

export default PostDetail;
