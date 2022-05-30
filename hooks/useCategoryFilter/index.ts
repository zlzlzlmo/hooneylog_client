/* eslint-disable react-hooks/exhaustive-deps */
import useReduxData from 'hooks/useReduxData';
import { useMemo } from 'react';
import { ALL_LOWER_CASE } from 'ts/constant';
import MultipleCategoryManager from 'util/category/multipleCategory';

const useCategoryFilter = () => {
  const { originalNotionList } = useReduxData();

  const categoryListToShow = useMemo((): [string, number][] => {
    const categoryNameList = originalNotionList.map(({ category }) => category);
    return [
      [ALL_LOWER_CASE, originalNotionList.length],
      ...new MultipleCategoryManager(categoryNameList).sortedCountCategoryList,
    ];
  }, [originalNotionList]);

  return { categoryListToShow };
};
export default useCategoryFilter;
