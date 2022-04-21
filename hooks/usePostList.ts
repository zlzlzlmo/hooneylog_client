/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { SanityPost } from 'ts/interface/post';
import useIntersectionObserver from './useIntersection';

interface usePostListProps {
  postListToShow: SanityPost[];
  ref: React.MutableRefObject<HTMLDivElement | null>;
}
const usePostList = ({ ref, postListToShow }: usePostListProps) => {
  const [firstUpdate, setFirstUpdate] = useState(true);
  const entry = useIntersectionObserver(ref, {});
  useEffect(() => {
    if (postListToShow.length === 0) {
      return;
    }
    if (entry?.isIntersecting) {
      setFirstUpdate(false);
    }
  }, [postListToShow, entry?.isIntersecting]);

  return { entry };
};

export default usePostList;
