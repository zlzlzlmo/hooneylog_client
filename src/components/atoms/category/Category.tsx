/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styles from './Category.module.scss';
import useCategory from './useCategory';

interface Props {
  category: string;
  count: number;
}

const Category = ({ category, count }: Props) => {
  const { active, handleClick } = useCategory(category);

  return (
    <li key={category} className={`${styles.category} ${active && styles.active}`} onClick={handleClick}>
      <span className={styles.text}>{category}</span>
      <span className={styles.count}>({count})</span>
    </li>
  );
};

export default Category;
