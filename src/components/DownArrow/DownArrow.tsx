"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { getScrollContainer } from "@/lib/scrollContainer";

export function DownArrow() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const container = getScrollContainer();
    if (!container) {
      return;
    }

    const handleScroll = () => {
      setHidden(container.scrollTop > 20);
    };
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <motion.div
      className="fixed bottom-0 right-1/2 py-4 rounded-full"
      animate={{
        y: [0, -10, 0, 20, 0],
      }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      hidden={hidden}
    >
      <FaCaretDown />
    </motion.div>
  );
}
