import useElementVisible from 'hooks/useElementVisible';
import { useRef } from 'react';
import AbstractFactory from 'util/abstracFactory';
import SingleCategoryManager from 'util/category/singleCategory';

const usePostItem = (category: string) => {
  const articleRef = useRef<HTMLElement>(null);
  const singleCategory = AbstractFactory.createCategory('single', category) as SingleCategoryManager;
  const { timeToShow } = useElementVisible({ articleRef });

  return { singleCategory, timeToShow, articleRef };
};

export default usePostItem;
