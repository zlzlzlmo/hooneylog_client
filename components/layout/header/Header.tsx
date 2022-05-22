/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import useFilter from 'hooks/useFilter';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  const { resetQueryString, filterByQueryString } = useFilter();
  const handleHomeClick = () => {
    resetQueryString();
    filterByQueryString();
  };
  return (
    <header className={styles.container}>
      <div className={styles.inner_header}>
        <Link href="/" passHref>
          <a style={{ color: '#fff' }}>
            <h1 className={styles.logo} onClick={handleHomeClick}>
              <span>HooneyLog :</span>
            </h1>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
