import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MAX_WIDTH_MOBILE } from 'ts/constant';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const mobile = useMediaQuery({ query: MAX_WIDTH_MOBILE });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
};

export default useIsMobile;
