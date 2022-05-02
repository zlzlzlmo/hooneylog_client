/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/configStore';
import { getNotionList, setFilteredPostList } from 'redux/modules/post';
import MultipleCategoryManager from 'util/category/multipleCategory';
import { getQuerySearchParam } from 'util/common';

const usePostCategoryList = () => {
  const currentQueryParam = getQuerySearchParam('category');
  const dispatch = useAppDispatch();
  const reduxNotionList = useAppSelector(getNotionList);
  const multipleCategoryInstance = new MultipleCategoryManager(reduxNotionList);
  const categoryList = [['All', reduxNotionList.length], ...multipleCategoryInstance.sortedCountCategoryList];
  const [currentActive, setCurrentActive] = useState(categoryList[0][0]);
  const [burger, setBurger] = useState(false);
  const router = useRouter();
  // * 필터링된 list로 업데이트
  const filterNotionListByCategory = (clickedCategory: string) => {
    // * All 눌렀을때 전체보여주기
    if (clickedCategory === categoryList[0][0]) {
      dispatch(setFilteredPostList(reduxNotionList));
      return;
    }

    // * 클릭한 카테고리 별 보여주기
    const newList = reduxNotionList.filter(({ properties }) => {
      const cate = properties.category.multi_select[0].name;
      return cate === clickedCategory?.toLowerCase();
    });
    dispatch(setFilteredPostList(newList));
  };

  // * 카테고리 클릭했을때 호출
  const handleFilterClick = () => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickedCategory = e.currentTarget.dataset.category!;
    e.stopPropagation();
    setCurrentActive(clickedCategory);
    filterNotionListByCategory(clickedCategory);
    setBurger(false);
    router.push(`/?category=${clickedCategory.toLowerCase()}`);
  };

  const handleBurgerControl = (state: boolean) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    setBurger(state);
  };

  useLayoutEffect(() => {
    if (reduxNotionList.length === 0) {
      return;
    }
    setCurrentActive(currentQueryParam);
    filterNotionListByCategory(currentQueryParam);
  }, [reduxNotionList]);
  return { currentActive, categoryList, burger, handleFilterClick, handleBurgerControl };
};

export default usePostCategoryList;
