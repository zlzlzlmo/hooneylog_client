/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setFilteredPostList, setNotionList } from 'redux/modules/post';
import { INotionPost } from 'ts/interface/notion';

const useHandleReduxData = () => {
  const dispatch = useAppDispatch();

  const dispatchFilterNotionList = (data: INotionPost[]) => {
    dispatch(setFilteredPostList(data));
  };

  const dispatchOriginialNotionList = (data: INotionPost[]) => {
    useEffect(() => {
      dispatch(setNotionList(data));
    }, []);
  };

  return { dispatchFilterNotionList, dispatchOriginialNotionList };
};

export default useHandleReduxData;
