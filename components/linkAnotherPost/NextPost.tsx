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
      <span className={`${styles.container} ${styles.next}`}>
        {nextPost.title}
        <span className={styles.arrow_icon}>
          <GrLinkNext />
        </span>
      </span>
    </a>
  );
};

export default NextPost;
