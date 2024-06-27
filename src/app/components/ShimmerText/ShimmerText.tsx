"use client";

import { motion } from "framer-motion";
import React, { ComponentProps, useMemo } from "react";

interface FadeInTextProps {
  text: string;
  speed?: "slow" | "normal" | "fast" | "veryfast";
}

type HTwoProps = ComponentProps<typeof motion.h2>;

export const ShimmerText: React.FC<
  HTwoProps & FadeInTextProps & { delay: number | undefined }
> = React.memo(
  ({
    text,
    speed = "fast",
    className,
    initial,
    animate,
    transition,
    delay = 0,
  }) => {
    const letters = useMemo(() => text.split(""), [text]);

    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren:
            speed === "veryfast"
              ? 0.01
              : "fast"
              ? 0.03
              : speed === "normal"
              ? 0.05
              : speed === "slow"
              ? 0.1
              : 0,
          delayChildren: 0.04 * i,
          delay: delay,
        },
      }),
    };

    const child = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 12, stiffness: 100 },
      },
    };

    return (
      <motion.div
        key={text}
        variants={container}
        initial="hidden"
        animate="visible"
        className={className}
        transition={transition}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child} className="letter">
            {letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }
);
