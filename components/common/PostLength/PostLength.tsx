import React from 'react';
import styles from './PostLength.module.scss';

interface PostLengthProps {
  length: number;
}

const PostLength = ({ length }: PostLengthProps) => {
  return (
    <div className={styles.container}>
      총 <strong>{length}</strong>개의 포스트를 찾았습니다.
    </div>
  );
};

export default PostLength;
