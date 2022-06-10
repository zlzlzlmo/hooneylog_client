/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';
import useLogo from './useLogo';

const Logo = () => {
  const { resetFilterPostList } = useLogo();
  return (
    <Link href="/" passHref>
      <a style={{ color: '#fff' }}>
        <h1 className={styles.logo} onClick={resetFilterPostList}>
          <span>HooneyLog :</span>
        </h1>
      </a>
    </Link>
  );
};

export default Logo;
