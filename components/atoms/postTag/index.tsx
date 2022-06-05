/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import useFilterByQueryParam from 'hooks/useFilterByQueryParam';
import { useRouter } from 'next/router';
import React from 'react';
import { appendQueryString } from 'util/common';
import styles from './index.module.scss';

interface Props {
  tagName: string;
}

const PostTag = ({ tagName }: Props) => {
  const { handleFilter } = useFilterByQueryParam();
  const router = useRouter();

  const handleClick = (tag: string) => () => {
    if (router.pathname !== '/') {
      router.push(`/?tag=${tag}`);
      return;
    }

    appendQueryString('tag', tag);
    handleFilter();
  };

  return (
    <span className={styles.tag} onClick={handleClick(tagName)}>
      {tagName}
    </span>
  );
};

export default PostTag;
