import { useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setNotionList } from 'redux/modules/post';
import { INotionPost } from 'ts/interface/notion';

interface useInitialDispatchProps {
  notionList: INotionPost[];
}
const useInitialDispatch = ({ notionList }: useInitialDispatchProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNotionList(notionList));
  }, []);
};

export default useInitialDispatch;
