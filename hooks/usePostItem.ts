/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { urlFor } from 'sanity/config';
import { SanityImage, SanityPostBody } from 'ts/interface/post';
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
