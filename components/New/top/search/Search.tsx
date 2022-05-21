/* eslint-disable no-use-before-define */
import useHandleReduxData from 'hooks/useHandleReduxData';
import useReduxData from 'hooks/useReduxData';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import SearchController from 'util/search';
import styles from './Search.module.scss';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const { originalNotionList } = useReduxData();

  const { dispatchFilterNotionList } = useHandleReduxData();

  const handleSearchValue = () => (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const handleFormSubmit = () => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    appendQueryString();
    filterNotionListBySearchValue();
    resetInputValue();

    function appendQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('search', searchValue);
      window.history.pushState({}, '', `${window.location.origin}?${searchParams}`);
    }

    function filterNotionListBySearchValue() {
      const filteredList = new SearchController(originalNotionList).filteredListBySearchValue(searchValue);
      dispatchFilterNotionList(filteredList);
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
