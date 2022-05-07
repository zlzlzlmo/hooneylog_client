/* eslint-disable class-methods-use-this */
/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from 'redux/configStore';
import { getNotionList } from 'redux/modules/post';

const useReduxData = () => {
  const originalNotionList = () => {
    return useAppSelector(getNotionList);
  };
  return { originalNotionList: originalNotionList() };
};

export default useReduxData;
