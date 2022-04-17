import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <h1 className={styles.logo}>HooneyLog</h1>
      </nav>
    </header>
  );
}

export default Header;
