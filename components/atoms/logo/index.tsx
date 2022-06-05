/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import useFilter from 'hooks/useFilter';
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

const Logo = () => {
  const { resetQueryString, filterByQueryString } = useFilter();

  const handleHomeClick = () => {
    resetQueryString();
    filterByQueryString();
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
