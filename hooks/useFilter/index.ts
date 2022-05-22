import useHandleReduxData from 'hooks/useHandleReduxData';
import useReduxData from 'hooks/useReduxData';
import { ALL_LOWER_CASE } from 'ts/constant';
import { queryParamFor } from 'util/common';
import SearchController from 'util/search';

const useFilter = () => {
  const { originalNotionList } = useReduxData();
  const { dispatchFilterNotionList } = useHandleReduxData();

  const resetQueryString = () => {
    window.history.pushState({}, '', `${window.location.origin}`);
  };

  const filterByQueryString = () => {
    const category = queryParamFor('category');
    const searchValue = queryParamFor('search');
    const tag = queryParamFor('tag');
    let result = originalNotionList;
    if (category === null && searchValue === null && tag === null) {
      dispatchFilterNotionList(result);
    }

    if (category !== null) {
      result = originalNotionList.filter(({ properties }) => {
        return properties.category.multi_select[0].name === category;
      });
      dispatchFilterNotionList(result);
    }

    if (searchValue !== null) {
      result = new SearchController(result).filteredListBySearchValue(searchValue);
      dispatchFilterNotionList(result);
    }

    if (tag !== null) {
      result = result.filter(({ properties }) => {
        const index = properties.tag.multi_select.findIndex(({ name }) => name === tag);
        return index !== -1;
      });
      dispatchFilterNotionList(result);
    }
  };

  return { filterByQueryString, resetQueryString };
};
export default useFilter;
