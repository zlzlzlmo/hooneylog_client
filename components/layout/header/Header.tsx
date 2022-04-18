import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.inner_header}>
        <h1 className={styles.logo}>HooneyLog</h1>
      </div>
    </header>
  );
}

export default Header;
