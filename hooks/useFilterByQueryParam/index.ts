import useReduxData from 'hooks/useReduxData';
import { useAppDispatch } from 'redux/configStore';
import { setFilteredPostList } from 'redux/modules/post';
import FilterByQueryParam from 'util/filterByQueryParam';

const useFilterByQueryParam = () => {
  const { originalNotionList } = useReduxData();
  const dispatch = useAppDispatch();

  const handleFilter = () => {
    const filter = new FilterByQueryParam(originalNotionList);
    dispatch(setFilteredPostList(filter.filteredList()));
  };

  return { handleFilter };
};

export default useFilterByQueryParam;
