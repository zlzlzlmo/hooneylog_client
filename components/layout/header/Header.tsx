/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import SearchHeader from 'components/search/SearchHeader';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner_header}>
        <h1 className={styles.logo}>
          <Link href="/">
            <span>HooneyLog :</span>
          </Link>
        </h1>
        <SearchHeader />
      </div>
    </header>
  );
};

export default Header;
