"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { BorderBeam } from "@/components/BorderBeam/BorderBeam";

function Beam({ index }: { index: number }) {
  const flag = index % 8 === 0;
  const colors = ["var(--purple)", "var(--pink)", "var(--violet)"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div
      className={cn("h-full animate-meteor ", {
        "[--duration:7s]": flag,
        "[--duration:11s]": !flag,
      })}
      style={{
        width: "6px",
        transform: "translateY(-20%)",
        // @ts-ignore
        "--delay": `${index * 0.15}s`,
      }}
    >
      <div
        style={{
          clipPath: "polygon(54% 0, 54% 0, 60% 100%, 40% 100%)",
          backgroundColor: randomColor,
        }}
        className={cn("w-full", {
          "h-8": flag,
          "h-12": !flag,
        })}
      >
        <div className="h-full w-full" />
      </div>
    </div>
  );
}

function useGridCount() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }
      const width = rect.width;
      const cellSize = 40;
      setCount(Math.ceil(width / cellSize));
    };

    updateCount();

    // Can be debounced if needed
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return {
    count,
    containerRef,
  };
}

function Background() {
  const { count, containerRef } = useGridCount();

  return (
    <div
      ref={containerRef}
      className="-z-1 absolute inset-0 flex h-full w-full flex-row justify-between bg-black"
    >
      <div className="absolute inset-0 h-full w-full rounded-full opacity-40" />
      <AnimatePresence>
        {Array.from({ length: count }, (_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0, rotate: 12 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative h-full w-px bg-gray-100 bg-opacity-10"
          >
            {(1 + i) % 4 === 0 && <Beam index={i + 1} />}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function AnimatedBeam({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg w-[calc(100dvw-2rem)] h-[calc(100dvh-2rem)] m-4 border border-gray-700">
      <Background />
      <BorderBeam size={250} duration={12} delay={9} />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}
