/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import useReduxData from 'hooks/useReduxData';
import Link from 'next/link';
import React from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setFilteredPostList } from 'redux/modules/post';
import { resetQueryString } from 'util/common';
import FilterByQueryParam from 'util/filterByQueryParam';
import styles from './index.module.scss';

const Logo = () => {
  const { originalNotionList } = useReduxData();
  const dispatch = useAppDispatch();

  const handleFilter = () => {
    const filter = new FilterByQueryParam(originalNotionList);
    dispatch(setFilteredPostList(filter.filteredList()));
  };

  const handleHomeClick = () => {
    resetQueryString();
    handleFilter();
  };

  return (
    <Link href="/" passHref>
      <a style={{ color: '#fff' }}>
        <h1 className={styles.logo} onClick={handleHomeClick}>
          <span>HooneyLog :</span>
        </h1>
      </a>
    </Link>
  );
};

export default Logo;
