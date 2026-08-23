export const SCROLL_CONTAINER_ID = "scroll-container";

export function getScrollContainer(): HTMLElement | null {
  return document.getElementById(SCROLL_CONTAINER_ID);
}
