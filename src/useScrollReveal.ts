import { useLayoutEffect } from "react";

/**
 * One-shot scroll entrances with a visible-by-default fallback.
 * Elements only become hidden when IntersectionObserver is available
 * and the user has not requested reduced motion.
 */
export default function useScrollReveal() {
  useLayoutEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove("motion-pending");
        entry.target.classList.add("motion-visible");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.04 });

    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      // Never hide above-the-fold content or restored-scroll content.
      if (rect.top < window.innerHeight * 0.92) {
        element.classList.add("motion-visible");
      } else {
        element.classList.add("motion-pending");
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
      for (const element of elements) {
        element.classList.remove("motion-pending", "motion-visible");
      }
    };
  }, []);
}
