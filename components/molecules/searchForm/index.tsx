/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-use-before-define */
import SearchBtn from 'components/atoms/searchBtn';
import SearchInput from 'components/atoms/searchInput';
import React from 'react';
import styles from './index.module.scss';
import useSearchForm from './useSearchForm';

const SearchForm = () => {
  const { handleFormSubmit, handleSearchValue } = useSearchForm();

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
