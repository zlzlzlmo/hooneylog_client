/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import useCategoryFilter from 'hooks/useCategoryFilter';
import useFilter from 'hooks/useFilter';
import React, { useEffect, useState } from 'react';
import { ALL_LOWER_CASE } from 'ts/constant';
import SingleCategoryManager from 'util/category/singleCategory';
import { appendQueryString, queryParamFor } from 'util/common';
import styles from './CategoryFilter.module.scss';

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_LOWER_CASE);
  const { categoryListToShow } = useCategoryFilter();
  const { filterByQueryString, resetQueryString } = useFilter();

  useEffect(() => {
    if (queryParamFor('category') === null) {
      setActiveCategory('all');
    }
  }, [queryParamFor('category')]);

  const handleClickCategory = (category: string) => () => {
    setActiveCategory(category);
    controlQueryString();
    filterByQueryString();

    function controlQueryString() {
      if (category === 'all') {
        resetQueryString();
      } else {
        appendQueryString('category', category);
      }
    }
  };

  return (
    <ul className={styles.container}>
      {categoryListToShow.map(([category, count]) => (
        <li
          key={category}
          onClick={handleClickCategory(category)}
          className={`${activeCategory === category && styles.active}`}
        >
          <span className={styles.text}>{new SingleCategoryManager(category).categoryLetterToShow}</span>
          <span className={styles.count}>({count})</span>
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilter;
