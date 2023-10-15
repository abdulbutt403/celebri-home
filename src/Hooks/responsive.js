import { useMediaQuery } from 'react-responsive';

function useResponsive() {
  return useMediaQuery({ query: '(max-width: 768px)' });
}

export default useResponsive;
