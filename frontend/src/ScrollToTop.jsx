import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); // Re-run the effect whenever the pathname changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
