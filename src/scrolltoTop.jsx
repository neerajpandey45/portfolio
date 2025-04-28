import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  const [state, setState] = useState();
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    setState("hello");
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrollToTop;
