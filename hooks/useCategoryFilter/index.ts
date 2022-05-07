/* eslint-disable react-hooks/exhaustive-deps */
import useHandleReduxData from 'hooks/useHandleReduxData';
import useReduxData from 'hooks/useReduxData';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { ALL_LOWER_CASE } from 'ts/constant';
import MultipleCategoryManager from 'util/category/multipleCategory';
import SingleCategoryManager from 'util/category/singleCategory';

const useCategoryFilter = () => {
  const router = useRouter();
  const { originalNotionList } = useReduxData();
  const { dispatchFilterNotionList } = useHandleReduxData();

  useEffect(() => {
    const handleFilterNotionList = (category: string) => {
      let result;
      if (category === ALL_LOWER_CASE) {
        result = originalNotionList;
      } else {
        result = originalNotionList.filter(({ properties }) => {
          return properties.category.multi_select[0].name === category;
        });
      }

      dispatchFilterNotionList(result);
    };

    handleFilterNotionList(new SingleCategoryManager().categorySearchParam);
  }, [originalNotionList, new SingleCategoryManager().categorySearchParam]);

  const categoryListToShow = useMemo((): [string, number][] => {
    return [
      [ALL_LOWER_CASE, originalNotionList.length],
      ...new MultipleCategoryManager(originalNotionList).sortedCountCategoryList,
    ];
  }, [originalNotionList]);

  const routerPushFor = (category: string) => {
    console.log('??dpd');
    router.push(`/?category=${category}`);
  };

  return { categoryListToShow, routerPushFor };
};
export default useCategoryFilter;
