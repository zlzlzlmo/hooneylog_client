/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import useFilterByQueryParam from 'hooks/useFilterByQueryParam';
import Link from 'next/link';
import React from 'react';
import { resetQueryString } from 'util/common';
import styles from './index.module.scss';

const Logo = () => {
  const { handleFilter } = useFilterByQueryParam();

  const handleClick = () => {
    resetQueryString();
    handleFilter();
  };

  return (
    <Link href="/" passHref>
      <a style={{ color: '#fff' }}>
        <h1 className={styles.logo} onClick={handleClick}>
          <span>HooneyLog :</span>
        </h1>
      </a>
    </Link>
  );
};

export default Logo;
