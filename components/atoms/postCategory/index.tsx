/* eslint-disable no-shadow */
import React from 'react';
import SingleCategoryManager from 'util/category/singleCategory';
import AbstractFactory from 'util/abstracFactory';
import styles from './index.module.scss';

interface Props {
  category: string;
}

const PostCategory = ({ category }: Props) => {
  const { categoryColorToShow, categoryLetterToShow } = AbstractFactory.createCategory(
    'single',
    category,
  ) as SingleCategoryManager;

  return (
    <span className={styles.category} style={{ backgroundColor: categoryColorToShow }}>
      {categoryLetterToShow}
    </span>
  );
};

export default PostCategory;
