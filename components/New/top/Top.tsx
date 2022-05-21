import React from 'react';
import Profile from './profile/Profile';
import Search from './search/Search';
import styles from './Top.module.scss';

const Top = () => {
  return (
    <section className={styles.container}>
      <Profile />
      <Search />
    </section>
  );
};

export default Top;
