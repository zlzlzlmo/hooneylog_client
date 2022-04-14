import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.logo_box}>
          <Image src="/images/logo.png" alt="logo" width={500} height={500} objectFit="contain" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
