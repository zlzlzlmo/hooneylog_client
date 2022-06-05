/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

interface Props {
  postId: string;
  text: string;
}

const LinkToDetail = ({ postId, text }: Props) => {
  return (
    <Link href={`post/${postId}`} passHref>
      <a>
        <span className={styles.go_to_detail}>{text}</span>
      </a>
    </Link>
  );
};

export default LinkToDetail;
