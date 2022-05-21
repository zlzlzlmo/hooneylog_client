/* eslint-disable no-use-before-define */
import useFilter from 'hooks/useFilter';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styles from './Search.module.scss';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const { filterByQueryString } = useFilter();

  const handleSearchValue = () => (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const handleFormSubmit = () => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    appendQueryString();
    filterByQueryString();
    resetInputValue();

    function appendQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('search', searchValue);
      window.history.pushState({}, '', `${window.location.origin}?${searchParams}`);
    }

    function resetInputValue() {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };
  return (
    <section className={styles.container}>
      <form onSubmit={handleFormSubmit()}>
        <input
          type="text"
          className={styles.input}
          placeholder="검색어를 입력하세요"
          onChange={handleSearchValue()}
          value={searchValue}
          ref={inputRef}
        />
        <button type="submit" className={styles.btn}>
          검색
        </button>
      </form>
    </section>
  );
};

export default Search;
