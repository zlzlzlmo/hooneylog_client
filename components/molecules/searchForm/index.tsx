/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-use-before-define */
import SearchBtn from 'components/atoms/searchBtn';
import SearchInput from 'components/atoms/searchInput';
import useReduxData from 'hooks/useReduxData';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setFilteredPostList } from 'redux/modules/post';
import { appendQueryString } from 'util/common';
import FilterByQueryParam from 'util/filterByQueryParam';
import styles from './index.module.scss';

const SearchForm = () => {
  const { originalNotionList } = useReduxData();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleFilter = () => {
    const filter = new FilterByQueryParam(originalNotionList);
    dispatch(setFilteredPostList(filter.filteredList()));
  };

  const handleFormSubmit = () => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue === '') {
      return;
    }
    appendQueryString('search', searchValue);
    handleFilter();
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
