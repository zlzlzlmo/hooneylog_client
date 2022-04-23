import React, { ChangeEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './Search.module.scss';

interface SearchProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Search = ({ handleChange }: SearchProps) => {
  return (
    <div className={styles.container}>
      <BsSearch className={styles.search_icon} />
      <input
        className={styles.input}
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Search;
