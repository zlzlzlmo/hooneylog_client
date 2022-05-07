/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import useCategoryFilter from 'hooks/useCategoryFilter';
import React, { useEffect, useState } from 'react';
import { ALL_LOWER_CASE } from 'ts/constant';
import SingleCategoryManager from 'util/category/singleCategory';
import styles from './DesktopCategoryFilter.module.scss';

const DesktopCategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_LOWER_CASE);
  const { categoryListToShow, routerPushFor } = useCategoryFilter();

  useEffect(() => {
    setActiveCategory(new SingleCategoryManager().categorySearchParam);
  }, []);

  const handleClickCategory = (category: string) => () => {
    setActiveCategory(category);
    routerPushFor(category);
  };

  return (
    <ul className={styles.container}>
      {categoryListToShow.map(([category, count]) => (
        <li
          key={category}
          onClick={handleClickCategory(category)}
          className={`${activeCategory === category && styles.active}`}
        >
          {new SingleCategoryManager(category).categoryLetterToShow}
          <span className={styles.count}>({count})</span>
        </li>
      ))}
    </ul>
  );
};

export default DesktopCategoryFilter;
