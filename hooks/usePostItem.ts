/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { urlFor } from 'sanity/config';
import { SanityImage, SanityPostBody } from 'ts/interface/post';
import useIntersectionObserver from './useIntersection';

interface usePostItemProps {
  mainImage: SanityImage;
  body: SanityPostBody[];
  containerRef: React.RefObject<HTMLDivElement>;
}

const usePostItem = ({ mainImage, body, containerRef }: usePostItemProps) => {
  const [desc, setDesc] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [timeToShow, setIsTimeToShow] = useState<boolean>(false);

  const entry = useIntersectionObserver(containerRef, {});

  const getNormalAndBlockTypeText = useCallback(() => {
    const blockAndNormal = body.filter(({ _type, style }) => {
      return _type === 'block' && style === 'normal';
    });
    const paragraph = blockAndNormal.map(({ children }) => {
      return children[0].text;
    });

    setDesc(paragraph.join(' ').slice(0, 120));
  }, [body]);

  useEffect(() => {
    getNormalAndBlockTypeText();
    setImageUrl(urlFor(mainImage).url());
  }, [body, mainImage]);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsTimeToShow(true);
    }
  }, [entry?.isIntersecting]);

  return { imageUrl, desc, timeToShow };
};

export default usePostItem;
