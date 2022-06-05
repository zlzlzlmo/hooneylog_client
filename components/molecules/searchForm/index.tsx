/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-use-before-define */
import SearchBtn from 'components/atoms/searchBtn';
import SearchInput from 'components/atoms/searchInput';
import useFilter from 'hooks/useFilter';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { appendQueryString } from 'util/common';
import styles from './index.module.scss';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { filterByQueryString } = useFilter();

  const handleFormSubmit = () => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue === '') {
      return;
    }
    appendQueryString('search', searchValue);
    filterByQueryString();
  };

  const handleSearchValue = () => (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  return (
    <section className={styles.container}>
      <form onSubmit={handleFormSubmit()}>
        <SearchInput onChange={handleSearchValue()} />
        <SearchBtn />
      </form>
    </section>
  );
};

export default SearchForm;
