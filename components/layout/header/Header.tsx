import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <h1 className={styles.logo}>
          HooneyLog<span className={styles.strong}> ★</span>
        </h1>
      </nav>
    </header>
  );
}

export default Header;
