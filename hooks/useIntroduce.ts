import { useEffect, useState } from 'react';

interface useIntroduceProps {
  mainImage: string;
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
    }
  }, [mainImage]);

  return { imageUrl, isHome };
};

export default useIntroduce;
