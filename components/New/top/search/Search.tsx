/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-use-before-define */
import useFilter from 'hooks/useFilter';
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { appendQueryString, queryParamFor } from 'util/common';
import styles from './Search.module.scss';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const { filterByQueryString } = useFilter();

  useEffect(() => {
    if (queryParamFor('search') !== null) {
      if (inputRef.current) {
        inputRef.current.value = queryParamFor('search')!;
      }
    } else {
      resetInputValue();
    }

    function resetInputValue() {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }, [queryParamFor('search')]);

  const handleSearchValue = () => (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const handleFormSubmit = () => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    appendQueryString('search', searchValue);
    filterByQueryString();
  };
  return (
    <section className={styles.container}>
      <form onSubmit={handleFormSubmit()}>
        <input
          type="text"
          className={styles.input}
          placeholder="검색어를 입력하세요"
          onChange={handleSearchValue()}
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