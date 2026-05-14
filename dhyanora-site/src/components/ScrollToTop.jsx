import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);
    
    // Also try documentElement for extra coverage
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
  }, [pathname]);


  return null;
}
