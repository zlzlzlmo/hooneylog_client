/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styles from './index.module.scss';
import usePostTag from './usePostTag';

interface Props {
  tagName: string;
}

const PostTag = ({ tagName }: Props) => {
  const { filterPostListBy } = usePostTag();

  return (
    <span className={styles.tag} onClick={filterPostListBy(tagName)}>
      {tagName}
    </span>
  );
};

export default PostTag;
