"use client";

import { HTMLAttributes, useEffect, useState } from "react";

// TODO - Could use Framer Motion for this progress bar instead - https://www.framer.com/motion/scroll-animations/

export function Progress({
  className,
}: {
  className: HTMLAttributes<HTMLDivElement>["className"];
}) {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // This will calculate the final total of the percentage of how much the user has scrolled.
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);

    //
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-transparent h-1 sticky top-0 left-0 w-full rounded-full">
      <div
        className={`h-1 bg-gradient-to-r from-purple-500 to-pink-400 transition-all duration-75 ease-in-out ${className}`}
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
}
