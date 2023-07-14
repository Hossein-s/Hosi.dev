import { gsap } from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";

export function useSticky(): MutableRefObject<HTMLElement | undefined> {
  const elementRef = useRef<HTMLElement>();

  useEffect(() => {
    function updateTop() {
      const element = elementRef.current!;
      const rect = element.getClientRects()[0];

      if (rect) {
        // use gsap to animate that
        const top = Math.round(window.innerHeight / 2 - rect.height / 2 + window.scrollY);
        gsap.to(element, { top, duration: 0.1 });
      }
    }

    // call function for initialization
    updateTop();

    // add and remove event listener
    window.addEventListener("scroll", updateTop);
    return () => {
      window.removeEventListener("scroll", updateTop);
    };
  }, []);

  return elementRef;
}
