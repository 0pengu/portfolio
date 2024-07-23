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

type programmatic = {
  programmatic: boolean;
  setProgrammatic: (programmatic: boolean) => void;
};

export const useProgrammaticStore = create<programmatic>()((set) => ({
  programmatic: false,
  setProgrammatic: (programmatic) => set({ programmatic }),
}));
