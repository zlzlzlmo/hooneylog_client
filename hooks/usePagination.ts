/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { Post } from 'ts/interface/post';
import PaginationContoller from 'util/pagination';

interface UsePaginationProps {
  postList: Post[];
}

interface ReactPagination {
  selected: number;
}

const usePagination = ({ postList }: UsePaginationProps) => {
  const [pageCount, setPageCount] = useState<number>(0);
  const [postListToShow, setPostListToShow] = useState<Post[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);

  const handlePageClick = (data: ReactPagination) => {
    setStartIndex(Number(data.selected));
  };

  const paginationWithMemo = useMemo(() => {
    return new PaginationContoller<Post>(postList);
  }, []);

  useEffect(() => {
    setPageCount(paginationWithMemo.getTotalPageCount());
  }, [postList]);

  useEffect(() => {
    setPostListToShow(paginationWithMemo.getItemsToShow(startIndex));
  }, [startIndex]);

  return { pageCount, postListToShow, handlePageClick };
};

export default usePagination;
