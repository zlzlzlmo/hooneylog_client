/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-self-compare */
import useDispatchRedux from 'hooks/useDispatchRedux';
import useReduxData from 'hooks/useReduxData';
import { NotionPost } from 'ts/interface/notion';
import QueryParam from 'util/query';
import SearchController from 'util/search';

const useFilter = () => {
  const { originalNotionList } = useReduxData();
  const { dispatchFilterNotionList } = useDispatchRedux();

  const resetQueryString = () => {
    window.history.pushState({}, '', `${window.location.origin}`);
  };

  const filterByQueryString = () => {
    const categoryParam = QueryParam.queryParamFor('category');
    const searchValueParam = QueryParam.queryParamFor('search');
    const tagParam = QueryParam.queryParamFor('tag');
    let result = originalNotionList;

    if (categoryParam === null && searchValueParam === null && tagParam === null) {
      dispatchFilterNotionList(result);
      return;
    }

    // 카테고리와 태그는 중복 필터 X
    if (categoryParam !== null) {
      result = withCategoryFilter(categoryParam);
    } else if (tagParam !== null) {
      result = withTagsFilter(result, tagParam);
    }

    if (searchValueParam !== null) {
      result = withSearchValueFilter(result, searchValueParam);
    }

    dispatchFilterNotionList(result);
  };

  function withCategoryFilter(categoryParam: string) {
    return originalNotionList.filter(({ category }) => {
      return category === categoryParam;
    });
  }

  function withSearchValueFilter(notionList: NotionPost[], searchValueParam: string) {
    return new SearchController(notionList).filteredListBySearchValue(searchValueParam);
  }

  function withTagsFilter(notionList: NotionPost[], tag: string) {
    return notionList.filter(({ tags }) => {
      const index = tags.findIndex(({ name }) => name === tag);
      return index !== -1;
    });
  }

  return { filterByQueryString, resetQueryString };
};
export default useFilter;
