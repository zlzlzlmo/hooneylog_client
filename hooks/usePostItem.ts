/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useIntersectionObserver from './useIntersection';

interface usePostItemProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const usePostItem = ({ containerRef }: usePostItemProps) => {
  const [timeToShow, setIsTimeToShow] = useState<boolean>(false);

  const entry = useIntersectionObserver(containerRef, {});

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsTimeToShow(true);
    }
  }, [entry?.isIntersecting]);

  return { timeToShow };
};

export default usePostItem;
