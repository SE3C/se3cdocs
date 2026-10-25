import { useEffect, useRef, useState } from "react";

/**
 * Direction-aware header with accumulated scrolling distance.
 * Small trackpad/touch increments must still reveal navigation.
 */
export default function useHideChromeOnScroll() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const accumulated = useRef(0);
  const lastDirection = useRef(0);

  useEffect(() => {
    lastY.current = Math.max(0, window.scrollY);

    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY.current;
      lastY.current = y;

      if (y <= 64) {
        accumulated.current = 0;
        setHidden(false);
        return;
      }

      if (delta === 0) return;
      const direction = Math.sign(delta);

      if (direction !== lastDirection.current) {
        accumulated.current = 0;
        lastDirection.current = direction;
      }
      accumulated.current += Math.abs(delta);

      if (direction > 0 && y > 128 && accumulated.current >= 40) {
        setHidden(true);
        accumulated.current = 0;
      } else if (direction < 0 && accumulated.current >= 18) {
        setHidden(false);
        accumulated.current = 0;
      }
    };

    const onKeyboardNavigation = (event: KeyboardEvent) => {
      if (event.key === "Tab") setHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyboardNavigation);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyboardNavigation);
    };
  }, []);

  return hidden;
}
