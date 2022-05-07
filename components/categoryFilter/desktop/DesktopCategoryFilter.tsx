/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import useHandleReduxData from 'hooks/useHandleReduxData';
import useReduxData from 'hooks/useReduxData';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { ALL } from 'ts/constant';
import MultipleCategoryManager from 'util/category/multipleCategory';
import SingleCategoryManager from 'util/category/singleCategory';
import styles from './DesktopCategoryFilter.module.scss';

const DesktopCategoryFilter = () => {
  const router = useRouter();
  const { originalNotionList } = useReduxData();
  const { dispatchFilterNotionList } = useHandleReduxData();
  const [activeCategory, setActiveCategory] = useState(ALL);

  const createCategoryLetterToShow = (category: string) => {
    return new SingleCategoryManager(category).categoryLetterToShow;
  };

  useEffect(() => {
    const handleFilterNotionList = (category: string) => {
      let result;
      if (category === ALL) {
        result = originalNotionList;
      } else {
        result = originalNotionList.filter(({ properties }) => {
          const cate = properties.category.multi_select[0].name;
          return cate === category?.toLowerCase();
        });
      }

      dispatchFilterNotionList(result);
    };
    setActiveCategory(new SingleCategoryManager().categorySearchParam);
    handleFilterNotionList(new SingleCategoryManager().categorySearchParam);
  }, [new SingleCategoryManager().categorySearchParam]);

  const categoryListToShow = useMemo((): [string, number][] => {
    return [
      ['All', originalNotionList.length],
      ...new MultipleCategoryManager(originalNotionList).sortedCountCategoryList,
    ];
  }, [originalNotionList]);

  const handleClickForLink = (category: string) => () => {
    router.push(`/?category=${category.toLowerCase()}`);
  };

  return (
    <ul className={styles.container}>
      {categoryListToShow.map(([category, count]) => (
        <li
          key={category}
          onClick={handleClickForLink(category)}
          className={`${activeCategory === createCategoryLetterToShow(category) && styles.active}`}
        >
          {new SingleCategoryManager(category).categoryLetterToShow}
          <span className={styles.count}>({count})</span>
        </li>
      ))}
    </ul>
  );
};

export default DesktopCategoryFilter;
