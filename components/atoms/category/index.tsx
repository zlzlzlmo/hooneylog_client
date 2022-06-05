/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import useFilterByQueryParam from 'hooks/useFilterByQueryParam';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { appendQueryString, resetQueryString } from 'util/common';
import QueryParam from 'util/query';
import styles from './index.module.scss';

interface Props {
  category: string;
  count: number;
}

const Category = ({ category, count }: Props) => {
  const { handleFilter } = useFilterByQueryParam();
  const [active, setActive] = useState<boolean>(false);

  const lowwerCaseCategory = useMemo(() => {
    return category.toLowerCase();
  }, []);

  useEffect(() => {
    if (lowwerCaseCategory === 'all' && !QueryParam.queryParamFor('category')) {
      setActive(true);
      return;
    }
    if (QueryParam.queryParamFor('category') !== lowwerCaseCategory) {
      setActive(false);
      return;
    }

    setActive(true);
  }, [QueryParam.queryParamFor('category')]);

  const controlQueryString = useCallback(() => {
    if (lowwerCaseCategory === 'all') {
      resetQueryString();
      return;
    }

    appendQueryString('category', lowwerCaseCategory);
  }, []);

  const handleClick = () => {
    controlQueryString();
    handleFilter();
  };

  return (
    <li key={category} className={`${styles.category} ${active && styles.active}`} onClick={handleClick}>
      <span className={styles.text}>{category}</span>
      <span className={styles.count}>({count})</span>
    </li>
  );
};

export default Category;
