import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // We use a small timeout to ensure the scroll happens after the 
    // AnimatePresence transition has started or finished mounting the new page.
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
