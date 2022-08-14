import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { isBrowser } from './isBrowser';

const useResponsive = () => {
  const [isClient, setIsClient] = useState(false);

  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

  useEffect(() => {
    if (isBrowser()) setIsClient(true);
  }, []);

  return {
    isDesktop: isClient ? isDesktop : false
  };
};

export default useResponsive;
