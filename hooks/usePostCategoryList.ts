/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import MultipleCategoryManager from 'util/category/multipleCategory';
import { getQuerySearchParam } from 'util/common';
import useHandleReduxData from './useHandleReduxData';
import useReduxData from './useReduxData';

const usePostCategoryList = () => {
  const router = useRouter();
  const [burger, setBurger] = useState(false);
  const { originalNotionList } = useReduxData();
  const { filterNotionList } = useHandleReduxData();

  const categoryList = useMemo(() => {
    const multipleCategoryInstance = new MultipleCategoryManager(originalNotionList);
    return [['All', originalNotionList.length], ...multipleCategoryInstance.sortedCountCategoryList];
  }, [originalNotionList]);

  const [currentActive, setCurrentActive] = useState(categoryList[0][0]);

  // * 필터링된 list로 업데이트
  const filterNotionListByCategory = (clickedCategory: string) => {
    // * All 눌렀을때 전체보여주기
    if (clickedCategory === categoryList[0][0]) {
      filterNotionList(originalNotionList);
      return;
    }

    // * 클릭한 카테고리 별 보여주기
    const newList = originalNotionList.filter(({ properties }) => {
      const cate = properties.category.multi_select[0].name;
      return cate === clickedCategory?.toLowerCase();
    });
    filterNotionList(newList);
  };

  // * 카테고리 클릭했을때 호출
  const handleFilterClick = () => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickedCategory = e.currentTarget.dataset.category!;
    router.push(`/?category=${clickedCategory.toLowerCase()}`);
    e.stopPropagation();
    setBurger(false);
  };

  const handleBurgerControl = (state: boolean) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    setBurger(state);
  };

  useEffect(() => {
    if (originalNotionList.length === 0) {
      return;
    }
    setCurrentActive(getQuerySearchParam('category'));
    filterNotionListByCategory(getQuerySearchParam('category'));
  }, [originalNotionList, getQuerySearchParam('category')]);
  return { currentActive, categoryList, burger, handleFilterClick, handleBurgerControl };
};

export default usePostCategoryList;
