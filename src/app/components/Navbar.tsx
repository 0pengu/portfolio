"use client";

import { usePathStore } from "@/app/components/store";
import { Progress } from "@/app/components/Progress";
import { stat } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const path = usePathStore((state) => state.path);
  const setPath = usePathStore((state) => state.setPath);
  return (
    <>
      <nav className="sticky top-10 z-10 bg-zinc-900/50 backdrop-filter backdrop-blur-md border-1 rounded-full w-1/2 border-gray-800 justify-self-center m-auto">
        <div className="max-w-5xl mx-auto px-4">
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
            <Progress className="rounded-full w-[95%]" />
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
        </div>
      </nav>
    </>
  );
}
