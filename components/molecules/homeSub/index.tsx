import React from 'react';
import Profile from '../profile';
import SearchForm from '../searchForm';
import styles from './index.module.scss';

const HomeSub = () => {
  return (
    <section className={styles.container}>
      <Profile />
      <SearchForm />
    </section>
  );
};

export default HomeSub;
