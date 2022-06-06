import React from 'react';
import Logo from 'components/atoms/logo';
import styles from './index.module.scss';
import HeaderTextBox from '../headerTextBox';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner_header}>
        <Logo />
        <HeaderTextBox />
      </div>
    </header>
  );
};

export default Header;
