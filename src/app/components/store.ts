"use client";

import { create } from "zustand";

type path = {
  path: string;
  setPath: (path: string) => void;
};

export const usePathStore = create<path>()((set) => ({
  path: "/",
  setPath: (path) => set({ path }),
}));
