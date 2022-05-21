/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import useFilter from 'hooks/useFilter';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

const Header = () => {
  const { resetQueryString, filterByQueryString } = useFilter();
  const router = useRouter();
  const handleHomeClick = () => {
    if (router.pathname !== '/') {
      router.push('/');
    }
    resetQueryString();
    filterByQueryString();
  };
  return (
    <header className={styles.container}>
      <div className={styles.inner_header}>
        <h1 className={styles.logo} onClick={handleHomeClick}>
          <span>HooneyLog :</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
