import React from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import styles from './AnotherPost.module.scss';

interface PreviosPostProps {
  previosPost: {
    id: string;
    title: string;
  };
}

const PreviosPost = ({ previosPost }: PreviosPostProps) => {
  return (
    <a href={`/post/${previosPost.id}`}>
      <span className={`${styles.container} ${styles.previos}`}>
        <span className={styles.arrow_icon}>
          <GrLinkPrevious />
        </span>
        <span className={styles.title}>{previosPost.title}</span>
      </span>
    </a>
  );
};

export default PreviosPost;