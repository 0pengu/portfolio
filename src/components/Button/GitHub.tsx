"use client";

import { useState } from "react";
import { BsGithub } from "react-icons/bs";

export function GitHub({ url, name }: { url: string; name: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group">
      <button className="bg-zinc-600 mt-6 p-4 hover:bg-zinc-900 hover:transition-all transition-all hover:px-6 rounded-full">
        <div className="flex items-center align-bottom">
          <BsGithub />
          <span className="hidden group-hover:inline-block ml-2 text-sm">
            {name}
          </span>
        </div>
      </button>
    </a>
  );
}
