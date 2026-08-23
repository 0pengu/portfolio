"use client";

import { useScroll, useSpring } from "framer-motion";
import { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { useScrollContainerRef } from "@/lib/hooks/useScrollContainerRef";

// TODO - Could use Framer Motion for this progress bar instead - https://www.framer.com/motion/scroll-animations/

export function Progress({
  className,
}: {
  className: HTMLAttributes<HTMLDivElement>["className"];
}) {
  const containerRef = useScrollContainerRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-transparent h-1 sticky top-0 left-0 right-0 w-full rounded-full">
      <motion.div
        className={`h-1 bg-gradient-to-r from-purple-500 to-pink-400 ${className}`}
        style={{ scaleX, transformOrigin: 0 }}
      />
    </div>
  );
}
