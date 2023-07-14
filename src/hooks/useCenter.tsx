import { gsap } from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";

export function useCenter(
  onPadUpdate: (p: number) => void
): MutableRefObject<HTMLElement | undefined> {
  const elementRef = useRef<HTMLElement>();

  useEffect(() => {
    function updateTop() {
      const element = elementRef.current!;
      const rect = element.getClientRects()[0];

      if (rect) {
        // use gsap to animate that
        const top = Math.round(window.innerHeight / 2 - rect.height / 2 + window.scrollY);
        element.style.top = `${top}px`;

        onPadUpdate(top);
      }
    }

    // call function for initialization
    updateTop();

    // add and remove event listener
    window.addEventListener("resize", updateTop);
    return () => {
      window.removeEventListener("resize", updateTop);
    };
  }, []);

  return elementRef;
}
