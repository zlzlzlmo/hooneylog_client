/* eslint-disable react-hooks/exhaustive-deps */
import useIntersectionObserver from 'hooks/useIntersection';
import { useEffect, useState } from 'react';

interface usePostItemProps {
  articleRef: React.RefObject<HTMLElement>;
}

const useControlSkeleton = ({ articleRef }: usePostItemProps) => {
  const [timeToShow, setIsTimeToShow] = useState<boolean>(false);

  const entry = useIntersectionObserver(articleRef, {});

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsTimeToShow(true);
    }
  }, [entry?.isIntersecting]);

  return { timeToShow };
};

export default useControlSkeleton;
