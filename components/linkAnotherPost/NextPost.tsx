import React from 'react';
import { GrLinkNext } from 'react-icons/gr';
import styles from './AnotherPost.module.scss';

interface NextPostProps {
  nextPost: {
    id: string;
    title: string;
  };
}

const NextPost = ({ nextPost }: NextPostProps) => {
  return (
    <a href={`/post/${nextPost.id}`}>
      <div className={`${styles.container} ${styles.next}`}>
        <span className={styles.title}>{nextPost.title}</span>
        <span className={styles.arrow_icon}>
          <GrLinkNext />
        </span>
      </div>
    </a>
  );
};

export default NextPost;
