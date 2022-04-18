/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './PostItem.module.scss';

interface PostItemProps {
  title: string;
  createAt: string;
}

const PostItem = ({ title, createAt }: PostItemProps) => {
  return (
    <li className={styles.container}>
      <div>
        <section className={styles.title}>{title}</section>
        <section className={styles.desc}>tesst</section>
        <section className={styles.reg_date}>{createAt}</section>
      </div>
      <div className={styles.img_box}>
        <img src="" alt="이미지" />
      </div>
    </li>
  );
};

export default PostItem;
