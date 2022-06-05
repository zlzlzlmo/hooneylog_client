import React from 'react';
import styles from './index.module.scss';

interface Props {
  length: number;
}
const SearchedPostLength = ({ length }: Props) => {
  return (
    <div className={styles.container}>
      총 <strong>{length}</strong>개의 포스트를 찾았습니다.
    </div>
  );
};

export default SearchedPostLength;
