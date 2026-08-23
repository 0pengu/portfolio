import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";
import { getScrollContainer } from "@/lib/scrollContainer";

// Must populate before framer-motion's useScroll layout effect reads it.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useScrollContainerRef(): RefObject<HTMLElement> {
  const containerRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    containerRef.current = getScrollContainer();
  }, []);

  return containerRef;
}
