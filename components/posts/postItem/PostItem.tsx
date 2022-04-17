/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './PostItem.module.scss';

interface PostItemProps {
  title: string;
  desc: string;
  thumbnail: string;
}

const PostItem = ({ title, thumbnail, desc }: PostItemProps) => {
  return (
    <li className={styles.container}>
      <div>
        <section className={styles.title}>{title}</section>
        <section className={styles.desc}>{desc}</section>
        <section className={styles.reg_date}>2022년 4월 17일 오후 12시 42분</section>
      </div>
      <div className={styles.img_box}>
        <img src={thumbnail} alt="이미지" />
      </div>
    </li>
  );
};

export default PostItem;
