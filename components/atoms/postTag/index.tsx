/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import useFilter from 'hooks/useFilter';
import { useRouter } from 'next/router';
import React from 'react';
import { appendQueryString } from 'util/common';
import styles from './index.module.scss';

interface Props {
  tagName: string;
}

const PostTag = ({ tagName }: Props) => {
  const router = useRouter();
  const { filterByQueryString } = useFilter();

  const handleTagFilter = (tag: string) => () => {
    if (router.pathname !== '/') {
      router.push(`/?tag=${tag}`);
      return;
    }

    appendQueryString('tag', tag);
    filterByQueryString();
  };

  return (
    <span className={styles.tag} onClick={handleTagFilter(tagName)}>
      {tagName}
    </span>
  );
};

export default PostTag;
