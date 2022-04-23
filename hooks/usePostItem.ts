/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { urlFor } from 'sanity/config';
import { SanityImage, SanityPostBody } from 'ts/interface/post';

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

    setDesc(paragraph.join(' ').slice(0, 120));
  }, [body]);

  useEffect(() => {
    getNormalAndBlockTypeText();
    setImageUrl(urlFor(mainImage).url());
  }, [body, mainImage]);

  return { imageUrl, desc };
};

export default usePostItem;
