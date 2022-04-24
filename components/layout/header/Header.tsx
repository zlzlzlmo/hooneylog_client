/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import SearchHeader from 'components/search/SearchHeader';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner_header}>
        <Link href="/" passHref>
          <h1 className={styles.logo}>
            <span>HooneyLog :</span>
          </h1>
        </Link>
        <SearchHeader />
      </div>
    </header>
  );
};

export default Header;
