/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { SanityImage, SanityPostBody } from 'ts/interface/post';
import { getSanityImageurl } from 'util/common';

interface usePostItemProps {
  mainImage: SanityImage;
  body: SanityPostBody[];
}

const usePostItem = ({ mainImage, body }: usePostItemProps) => {
  const [desc, setDesc] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const getNormalAndBlockTypeText = useCallback(() => {
    const blockAndNormal = body.filter(({ _type, style }) => {
      return _type === 'block' && style === 'normal';
    });
    const paragraph = blockAndNormal.map(({ children }) => {
      return children[0].text;
    });

    setDesc(paragraph.join(' ').slice(0, 150));
  }, [body]);

  useEffect(() => {
    getNormalAndBlockTypeText();
    setImageUrl(getSanityImageurl(mainImage).url());
  }, [body, mainImage]);

  return { imageUrl, desc };
};

export default usePostItem;
