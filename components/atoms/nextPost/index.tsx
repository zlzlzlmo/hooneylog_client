/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { GrLinkNext } from 'react-icons/gr';
import styles from './index.module.scss';

interface Props {
  nextPost: {
    id: string;
    title: string;
  };
}

const NextPost = ({ nextPost }: Props) => {
  return (
    <Link href={`/post/${nextPost.id}`}>
      <a>
        <div className={`${styles.container} ${styles.next}`}>
          <span className={styles.title}>{nextPost.title}</span>
          <span className={styles.arrow_icon}>
            <GrLinkNext />
          </span>
        </div>
      </a>
    </Link>
  );
};

export default NextPost;
