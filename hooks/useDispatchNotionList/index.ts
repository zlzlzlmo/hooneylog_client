import { useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setNotionList } from 'redux/modules/post';
import { INotionPost } from 'ts/interface/notion';

interface useDispatchNotionListProps {
  notionList: INotionPost[];
}

const useDispatchNotionList = ({ notionList }: useDispatchNotionListProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNotionList(notionList));
  }, []);
};

export default useDispatchNotionList;
