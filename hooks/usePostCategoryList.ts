/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/configStore';
import { getNotionList, setFilteredPostList } from 'redux/modules/post';
import MultipleCategoryManager from 'util/category/multipleCategory';
import SingleCategoryManager from 'util/category/singleCategory';

const usePostCategoryList = () => {
  const dispatch = useAppDispatch();
  const reduxNotionList = useAppSelector(getNotionList);
  const multipleCategoryInstance = new MultipleCategoryManager(reduxNotionList);
  const categoryList = [['All', reduxNotionList.length], ...multipleCategoryInstance.sortedCountCategoryList];
  const [currentActive, setCurrentActive] = useState(categoryList[0][0]);
  const [burger, setBurger] = useState(false);
  const router = useRouter();
  const [firstRender, setFirstRender] = useState(true);
  const { slug } = router.query;

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
    router.push(`/${clickedCategory.toLowerCase()}`);

    e.stopPropagation();
    setCurrentActive(clickedCategory);
    filterNotionListByCategory(clickedCategory);
    setBurger(false);
  };

  const handleBurgerControl = (state: boolean) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    setBurger(state);
  };

  useLayoutEffect(() => {
    if (firstRender && categoryList.length > 1) {
      const singleCateogryInstance = new SingleCategoryManager(slug as string);

      if (slug === undefined || slug === 'all') {
        dispatch(setFilteredPostList(reduxNotionList));
        setCurrentActive(categoryList[0][0]);
        return;
      }

      filterNotionListByCategory(slug as string);
      setCurrentActive(singleCateogryInstance.categoryLetterToShow);
      setFirstRender(false);
    }
  }, [categoryList]);
  return { currentActive, categoryList, burger, handleFilterClick, handleBurgerControl };
};

export default usePostCategoryList;
