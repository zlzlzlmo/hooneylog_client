import { useEffect, useState } from 'react';
import { SanityImage } from 'ts/interface/post';
import { getSanityImageurl } from 'util/common';

interface useIntroduceProps {
  mainImage: SanityImage | string;
}
const useIntroduce = ({ mainImage }: useIntroduceProps) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isHome, setIsHome] = useState(false);

  const checkIsHome = (): boolean => {
    const result = window.location.pathname === '/';
    return result;
  };
  useEffect(() => {
    setIsHome(checkIsHome());
    if (typeof mainImage === 'string') {
      setImageUrl(mainImage);
      return;
    }
    setImageUrl(getSanityImageurl(mainImage).url());
  }, [mainImage]);

  return { imageUrl, isHome };
};

export default useIntroduce;
