/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import useReduxData from 'hooks/useReduxData';
import { useMemo } from 'react';
import { ALL_LOWER_CASE } from 'ts/constant';
import MultipleCategoryManager from 'util/category/multipleCategory';
import AbstractFactory from 'util/abstracFactory';

const useCategoryFilter = () => {
  const { originalNotionList } = useReduxData();

  const categoryListToShow = useMemo((): [string, number][] => {
    const categoryNameList = originalNotionList.map(({ category }) => category);
    const multipleCategory = AbstractFactory.createCategory('multiple', categoryNameList) as MultipleCategoryManager;
    return [[ALL_LOWER_CASE, originalNotionList.length], ...multipleCategory.sortedCountCategoryList];
  }, [originalNotionList]);

  return { categoryListToShow };
};
export default useCategoryFilter;
