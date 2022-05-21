import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <section className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('ddd');
        }}
      >
        <input type="text" className={styles.input} placeholder="검색어를 입력하세요" />
        <button type="submit" className={styles.btn}>
          검색
        </button>
      </form>
    </section>
  );
};

export default Search;
