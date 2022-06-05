/* eslint-disable react/jsx-key */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import Category from 'components/atoms/category';
import useCategoryFilter from 'hooks/useCategoryFilter';
import React from 'react';
import SingleCategoryManager from 'util/category/singleCategory';
import AbstractFactory from 'util/factory/abstractFactory';
import styles from './CategoryFilter.module.scss';

const CategoryFilter = () => {
  const { categoryListToShow } = useCategoryFilter();

  return (
    <ul className={styles.container}>
      {categoryListToShow.map(([category, count]) => {
        const singleCategory = AbstractFactory.createCategory('single', category) as SingleCategoryManager;
        return <Category category={singleCategory.categoryLetterToShow} count={count} />;
      })}
    </ul>
  );
};

export default CategoryFilter;
