import Link from 'next/link';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './SearchHeader.module.scss';

const SearchHeader = () => {
  return (
    <Link href="/search" passHref>
      <div className={styles.container}>
        <span className={styles.input}>
          SEARCH...
          <BsSearch style={{ color: '#fff' }} />
        </span>
      </div>
    </Link>
  );
};

export default SearchHeader;
