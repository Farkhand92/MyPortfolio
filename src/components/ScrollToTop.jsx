import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Get the scrollable container
    const scrollableContainer = document.querySelector('[data-scrollable]');
    
    if (scrollableContainer) {
      // Smooth scroll to top with transition
      scrollableContainer.scrollTo({
        top: 20,
        behavior: 'smooth'
      });
    }
    
    // Fallback to window scroll with smooth behavior
    window.scrollTo({
      top: 20,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;