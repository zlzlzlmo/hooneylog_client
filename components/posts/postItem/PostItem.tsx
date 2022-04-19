/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import usePostItem from 'hooks/usePostItem';
import React from 'react';
import { SanityImage, SanityPostBody } from 'ts/interface/post';
import { dateFormat } from 'util/common';
import styles from './PostItem.module.scss';

interface PostItemProps {
  title: string;
  createAt: string;
  mainImage: SanityImage;
  body: SanityPostBody[];
}

const PostItem = ({ title, createAt, mainImage, body }: PostItemProps) => {
  const { imageUrl, desc } = usePostItem({ mainImage, body });

  return (
    <article className={styles.container}>
      <div className={styles.img_box}>
        <img src={imageUrl !== '' ? imageUrl : ''} alt="이미지" />
      </div>
      <div className={styles.content_box}>
        <section className={styles.title}>{title}</section>
        <section className={styles.sub}>
          <div className={styles.author}>By Seunghoon</div>
          <div className={styles.category}>Typescript</div>
        </section>
        <p className={styles.desc}>{desc}</p>
        <section className={styles.reg_date}>{dateFormat(createAt)}</section>
      </div>
    </article>
  );
};

export default PostItem;
