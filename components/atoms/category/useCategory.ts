/* eslint-disable react-hooks/exhaustive-deps */
import useFilterByQueryParam from 'hooks/useFilterByQueryParam';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { resetQueryString, appendQueryString } from 'util/common';
import QueryParam from 'util/query';

const useCategory = (category: string) => {
  const { handleFilterByQueryParam } = useFilterByQueryParam();
  const [active, setActive] = useState<boolean>(false);

  const lowwerCaseCategory = useMemo(() => {
    return category.toLowerCase();
  }, []);

  const activeCurrentCategory = () => {
    if (lowwerCaseCategory === 'all' && !QueryParam.queryParamFor('category')) {
      setActive(true);
      return;
    }
    if (QueryParam.queryParamFor('category') !== lowwerCaseCategory) {
      setActive(false);
      return;
    }

    setActive(true);
  };

  useEffect(() => {
    activeCurrentCategory();
  }, [QueryParam.queryParamFor('category')]);

  const controlQueryParam = useCallback(() => {
    if (lowwerCaseCategory === 'all') {
      resetQueryString();
      return;
    }

    appendQueryString('category', lowwerCaseCategory);
  }, []);

  const handleClick = () => {
    controlQueryParam();
    handleFilterByQueryParam();
  };

  return { active, handleClick };
};

export default useCategory;
