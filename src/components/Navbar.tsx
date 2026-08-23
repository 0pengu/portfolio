"use client";

import { usePathStore, useProgrammaticStore } from "@/components/store";
import { Progress } from "@/components/Progress";
import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRouter } from "@/lib/hooks/useRouter";
import { clamp } from "@/lib/clamp";
import { useScrollContainerRef } from "@/lib/hooks/useScrollContainerRef";

function NavLink({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`px-2 py-4 text-sm whitespace-nowrap sm:px-4 sm:text-base ${
        active ? "text-purple-400" : "text-white"
      } hover:drop-shadow-2xl cursor-pointer`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {label}
    </motion.div>
  );
}

export function Navbar() {
  const router = useRouter();
  const containerRef = useScrollContainerRef();

  const { scrollY } = useScroll({ container: containerRef });
  const scrollVelocity = useVelocity(scrollY);

  const scaledVelocity = useTransform(scrollVelocity, (v) =>
    clamp(v, -100, 100),
  );

  const yTransform = useSpring(scaledVelocity, {
    stiffness: 20,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.nav
        className="sticky top-10 -mb-[4.25rem] z-10 bg-zinc-900/50 backdrop-filter backdrop-blur-md border-1 rounded-full w-[92%] sm:w-[70%] md:w-1/3 border-gray-800 justify-self-center m-auto overflow-hidden"
        style={{ y: yTransform }}
      >
        <div className="flex items-center justify-between h-16 mx-3 space-x-2">
          <NavLink
            label="Home"
            active={router.path === "/"}
            onClick={() => router.goto("/")}
          />
          <NavLink
            label="Experience"
            active={router.path === "/experience"}
            onClick={() => router.goto("/experience")}
          />
          <NavLink
            label="Projects"
            active={router.path === "/projects"}
            onClick={() => router.goto("/projects")}
          />
        </div>
        <Progress className="rounded-full" />
      </motion.nav>
    </>
  );
}
