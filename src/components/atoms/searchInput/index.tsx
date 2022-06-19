/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef } from 'react';
import QueryParam from 'util/query';
import styles from './index.module.scss';

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = ({ onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (QueryParam.queryParamFor('search') === null) {
      return;
    }

    if (!inputRef.current) {
      return;
    }

    inputRef.current.value = QueryParam.queryParamFor('search')!;
  }, [QueryParam.queryParamFor('search')]);

  return (
    <input type="text" className={styles.input} placeholder="검색어를 입력하세요" onChange={onChange} ref={inputRef} />
  );
};

export default SearchInput;
