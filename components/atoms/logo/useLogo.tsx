import useFilterByQueryParam from 'hooks/useFilterByQueryParam';
import { resetQueryString } from 'util/common';

const useLogo = () => {
  const { handleFilterByQueryParam } = useFilterByQueryParam();

  const resetFilterPostList = () => {
    resetQueryString();
    handleFilterByQueryParam();
  };

  return { resetFilterPostList };
};

export default useLogo;
