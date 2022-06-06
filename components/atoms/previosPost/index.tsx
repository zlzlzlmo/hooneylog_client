/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import styles from './index.module.scss';

interface Props {
  previosPost: {
    id: string;
    title: string;
  };
}

const PreviosPost = ({ previosPost }: Props) => {
  return (
    // <Link href={`/post/${previosPost.id}`}>
    <a href={`/post/${previosPost.id}`}>
      <span className={`${styles.container} ${styles.previos}`}>
        <span className={styles.arrow_icon}>
          <GrLinkPrevious />
        </span>
        <span className={styles.title}>{previosPost.title}</span>
      </span>
    </a>
    // </Link>
  );
};

export default PreviosPost;
