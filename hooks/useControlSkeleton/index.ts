/* eslint-disable react-hooks/exhaustive-deps */
import useIntersectionObserver from 'hooks/useIntersection';
import { useEffect, useState } from 'react';

interface usePostItemProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const useControlSkeleton = ({ containerRef }: usePostItemProps) => {
  const [timeToShow, setIsTimeToShow] = useState<boolean>(false);

  const entry = useIntersectionObserver(containerRef, {});

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsTimeToShow(true);
    }
  }, [entry?.isIntersecting]);

  return { timeToShow };
};

export default useControlSkeleton;
