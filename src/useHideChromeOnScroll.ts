import { useEffect, useRef, useState } from "react";

export default function useHideChromeOnScroll() {
  const [isChromeHidden, setIsChromeHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY > 60 && scrollDelta > 0) {
        setIsChromeHidden(true);
      } else if (scrollDelta < -24) {
        setIsChromeHidden(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isChromeHidden;
}
