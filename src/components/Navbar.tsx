"use client";

import { usePathStore } from "@/components/store";
import { Progress } from "@/components/Progress";
import { stat } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export function Navbar() {
  const path = usePathStore((state) => state.path);
  const setPath = usePathStore((state) => state.setPath);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const scaledVelocity = useTransform(scrollVelocity, (v) => v / 10);

  const yTransform = useSpring(scaledVelocity, {
    stiffness: 30,
    damping: 25,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.nav
        className="sticky top-10 z-10 bg-zinc-900/50 backdrop-filter backdrop-blur-md border-1 rounded-full w-3/4 lg:w-1/2 border-gray-800 justify-self-center m-auto"
        style={{ y: yTransform }}
      >
        <div className="flex items-center justify-between h-16 mx-3 space-x-4">
          <a
            href="#"
            className={`${
              path === "/" ? "text-white" : "text-gray-700"
            } hover:drop-shadow-2xl`}
            onClick={(e) => {
              e.preventDefault();
              setPath("/");
            }}
          >
            Home
          </a>
          <Progress className="rounded-full" />
          <a
            href="#projects"
            className={`${
              path === "/projects" ? "text-white" : "text-gray-700"
            } hover:drop-shadow-2xl`}
            onClick={(e) => {
              e.preventDefault();
              setPath("/projects");
            }}
          >
            Projects
          </a>
        </div>
      </motion.nav>
    </>
  );
}
