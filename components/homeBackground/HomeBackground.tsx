/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './HomeBackground.module.scss';

const HomeBackground = () => {
  return (
    <div className={styles.container} title="introduce_background">
      <div className={styles.intro_box}>
        <span className={styles.text_top}>Welcome!</span>
        <span className={styles.text_bottom}>
          This is <strong>Hooney's</strong> Tech Blog
        </span>
      </div>
    </div>
  );
};

export default HomeBackground;
