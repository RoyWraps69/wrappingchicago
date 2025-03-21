
import { useScrollToTop } from '@/hooks/useScrollToTop';

/**
 * Component that scrolls to the top on route changes
 * This is a wrapper component that doesn't render anything
 */
export const ScrollToTop = () => {
  useScrollToTop();
  return null;
};
