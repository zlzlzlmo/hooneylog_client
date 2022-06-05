/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

interface Props {
  postId: string;
  title: string;
}
const PostTitle = ({ postId, title }: Props) => {
  return (
    <Link href={`post/${postId}`} passHref>
      <a>
        <h2 className={styles.title}>{title}</h2>
      </a>
    </Link>
  );
};

export default PostTitle;
