/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setFilteredPostList, setNotionList } from 'redux/modules/post';
import { NotionPost } from 'ts/interface/notion';

const useHandleReduxData = () => {
  const dispatch = useAppDispatch();

  const dispatchFilterNotionList = (data: NotionPost[]) => {
    dispatch(setFilteredPostList(data));
  };

  const dispatchOriginialNotionList = (data: NotionPost[]) => {
    useEffect(() => {
      dispatch(setNotionList(data));
    }, []);
  };

  return { dispatchFilterNotionList, dispatchOriginialNotionList };
};

export default useHandleReduxData;
