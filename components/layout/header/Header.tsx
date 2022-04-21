/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner_header}>
        <Link href="/">
          <h1 className={styles.logo}>HooneyLog :</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
