import useFilterByQueryParam from 'hooks/useFilterByQueryParam';
import { useRouter } from 'next/router';
import { appendQueryString } from 'util/common';

const usePostTag = () => {
  const { handleFilterByQueryParam } = useFilterByQueryParam();
  const router = useRouter();

  const filterPostListBy = (tag: string) => () => {
    if (router.pathname !== '/') {
      router.push(`/?tag=${tag}`);
      return;
    }

    appendQueryString('tag', tag);
    handleFilterByQueryParam();
  };

  return { filterPostListBy };
};

export default usePostTag;
