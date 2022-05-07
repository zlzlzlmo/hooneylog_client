import useMediaQuery from 'hooks/useMediaQuery';
import { useState, useEffect } from 'react';
import { MAX_WIDTH_MOBILE } from 'ts/constant';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const mobile = useMediaQuery(MAX_WIDTH_MOBILE);
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
};

export default useIsMobile;
