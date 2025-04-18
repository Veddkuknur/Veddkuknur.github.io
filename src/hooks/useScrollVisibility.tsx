import { useEffect, useState } from "react";

export const useScrollVisibility = (selector: string, triggerMultiplier = 1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(selector);
      if (!container) return;

      const containerHeight = container.clientHeight;
      const containerTop = container.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;
      const triggerPosition = containerTop + containerHeight * triggerMultiplier;

      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      } else if (containerTop > 0 || scrollPosition < containerTop) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selector, triggerMultiplier]);

  return isVisible;
};
