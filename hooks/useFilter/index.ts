/* eslint-disable no-use-before-define */
import useReduxData from 'hooks/useReduxData';
import { useAppDispatch } from 'redux/configStore';
import { setFilteredPostList } from 'redux/modules/post';
import { NotionPost } from 'ts/interface/notion';
import QueryParam from 'util/query';
import SearchController from 'util/search';

const useFilter = () => {
  const { originalNotionList } = useReduxData();
  const dispatch = useAppDispatch();

  const resetQueryString = () => {
    window.history.pushState({}, '', `${window.location.origin}`);
  };

  const filterByQueryString = () => {
    const categoryParam = QueryParam.queryParamFor('category');
    const searchValueParam = QueryParam.queryParamFor('search');
    const tagParam = QueryParam.queryParamFor('tag');

    let result = originalNotionList;

    if (categoryParam === null && searchValueParam === null && tagParam === null) {
      dispatch(setFilteredPostList(result));
      return;
    }

    // 카테고리와 태그는 중복 필터 X
    if (categoryParam !== null) {
      result = withCategoryFilter(result, categoryParam);
    } else if (tagParam !== null) {
      result = withTagsFilter(result, tagParam);
    }

    if (searchValueParam !== null) {
      result = withSearchValueFilter(result, searchValueParam);
    }

    dispatch(setFilteredPostList(result));
  };

  function withCategoryFilter(notionList: NotionPost[], categoryParam: string) {
    return notionList.filter(({ category }) => {
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
