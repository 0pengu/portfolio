"use client";

import { MagicStar } from "@/app/components/MagicStar";
import { MagicText } from "@/app/components/MagicText";
import { useEffect } from "react";

export function Magic({ name }: { name: string }) {
  useEffect(() => {
    let index = 0,
      interval = 1000;

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star: any) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

      star.style.animation = "none";
      star.offsetHeight; // Trigger reflow
      star.style.animation = "";
    };

    const stars = document.getElementsByClassName("magic-star");
    for (const star of stars) {
      setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), interval);
      }, index++ * (interval / stars.length));
    }
  });

  return (
    <span className="magic">
      <MagicStar />
      <MagicStar />
      <MagicStar />
      <MagicText name={name} />
    </span>
  );
}
