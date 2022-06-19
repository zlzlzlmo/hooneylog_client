/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from 'redux/configStore';
import { getFilteredNotionList, getNotionList } from 'redux/modules/post';

const useReduxData = () => {
  const originalNotionList = () => {
    return useAppSelector(getNotionList);
  };

  const filteredNotionList = () => {
    return useAppSelector(getFilteredNotionList);
  };
  return { originalNotionList: originalNotionList(), filteredNotionList: filteredNotionList() };
};

export default useReduxData;
