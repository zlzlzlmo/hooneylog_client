/* eslint-disable react/no-unused-prop-types */
import Link from 'next/link';
import React from 'react';
import { dateFormat } from 'util/common';
import styles from './PostItem.module.scss';

interface PostItemProps {
  title: string;
  createdAt: string;
  id: string;
  category: string;
  description: string;
  tag: { id: string; name: string }[];
}
const PostItem = ({ title, createdAt, id, category, description, tag }: PostItemProps) => {
  return (
    <article className={styles.container}>
      <section className={styles.img_box}>
        <img src="/images/default.avif" />
      </section>
      <section className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.date}>{dateFormat(createdAt)}</div>
        <section className={styles.tag_box}>
          {tag.map(({ name }) => (
            <span className={styles.tag} key={name}>
              {name}
            </span>
          ))}
        </section>
        <section className={styles.description}>{description}</section>
        <span className={styles.go_to_detail}>Read More</span>
      </section>
    </article>
  );
};

export default PostItem;
