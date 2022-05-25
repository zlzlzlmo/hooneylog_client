/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setFilteredPostList, setNotionList } from 'redux/modules/post';
import { NotionPost } from 'ts/interface/notion';

const useDispatchRedux = () => {
  const dispatch = useAppDispatch();

  const useDispatchFilterNotionList = (data: NotionPost[]) => {
    useEffect(() => {
      dispatch(setFilteredPostList(data));
    }, []);
  };

  const useDispatchOriginialNotionList = (data: NotionPost[]) => {
    useEffect(() => {
      dispatch(setNotionList(data));
    }, []);
  };

  return {
    dispatchFilterNotionList: useDispatchFilterNotionList,
    dispatchOriginialNotionList: useDispatchOriginialNotionList,
  };
};

export default useDispatchRedux;
