import useHandleReduxData from 'hooks/useHandleReduxData';
import useReduxData from 'hooks/useReduxData';
import { ALL_LOWER_CASE } from 'ts/constant';
import SearchController from 'util/search';

const useFilter = () => {
  const { originalNotionList } = useReduxData();
  const { dispatchFilterNotionList } = useHandleReduxData();

  const filterByQueryString = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get('category');
    const searchValue = searchParams.get('search');
    let result = originalNotionList;

    if (category !== null) {
      if (category === ALL_LOWER_CASE) {
        result = originalNotionList;
      } else {
        result = originalNotionList.filter(({ properties }) => {
          return properties.category.multi_select[0].name === category;
        });
      }
    }

    if (searchValue !== null) {
      const filteredList = new SearchController(result).filteredListBySearchValue(searchValue);
      console.log('filteredList : ', filteredList);
      dispatchFilterNotionList(filteredList);
    }
  };

  return { filterByQueryString };
};
export default useFilter;
