import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return { isMobile };
};

export default useResponsive;
