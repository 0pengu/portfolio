"use client";

import { useState } from "react";

export function Resume() {
  return (
    <a href="/resume">
      <button className="bg-zinc-600 mt-4 p-4 hover:bg-zinc-900 hover:transition-all transition-all hover:px-6 rounded-full">
        <div className="flex items-center">View my resume</div>
      </button>
    </a>
  );
}
