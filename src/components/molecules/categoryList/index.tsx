import Category from 'components/atoms/category/Category';
import useCategoryFilter from 'hooks/useCategoryFilter';
import React, { Fragment } from 'react';
import SingleCategoryManager from 'util/category/singleCategory';
import AbstractFactory from 'util/abstracFactory';
import styles from './index.module.scss';

const CategoryList = () => {
  const { categoryListToShow } = useCategoryFilter();

  return (
    <ul className={styles.container}>
      {categoryListToShow.map(([category, count]) => {
        const singleCategory = AbstractFactory.createCategory('single', category) as SingleCategoryManager;
        return (
          <Fragment key={category}>
            <Category category={singleCategory.categoryLetterToShow} count={count} />
          </Fragment>
        );
      })}
    </ul>
  );
};

export default CategoryList;
