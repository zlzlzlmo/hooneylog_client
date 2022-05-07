/* eslint-disable class-methods-use-this */
/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from 'redux/configStore';
import { getFilteredNotionList, getNotionList } from 'redux/modules/post';

const useReduxData = () => {
  const originalNotionList = () => {
    return useAppSelector(getNotionList);
  };

  const filterNotionList = () => {
    return useAppSelector(getFilteredNotionList);
  };
  return { originalNotionList: originalNotionList(), filterNotionList: filterNotionList() };
};

export default useReduxData;
