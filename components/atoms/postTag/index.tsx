/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import useReduxData from 'hooks/useReduxData';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setFilteredPostList } from 'redux/modules/post';
import { appendQueryString } from 'util/common';
import Filter from 'util/filterByQueryParam';
import styles from './index.module.scss';

interface Props {
  tagName: string;
}

const PostTag = ({ tagName }: Props) => {
  const { originalNotionList } = useReduxData();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleFilter = () => {
    const filter = new Filter(originalNotionList);
    dispatch(setFilteredPostList(filter.filteredList()));
  };

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
