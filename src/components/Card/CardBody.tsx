"use client";

import { useEffect, useRef } from "react";
import Card from "@/components/Card/Card";
import { usePathStore, useProgrammaticStore } from "@/components/store";

export function CardBody({ children }: { children: React.ReactNode }) {
  const path = usePathStore((state) => state.path);
  const setPath = usePathStore((state) => state.setPath);
  const ref = useRef<HTMLDivElement>(null);
  const [programmatic, setProgrammatic] = useProgrammaticStore((state) => [
    state.programmatic,
    state.setProgrammatic,
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName("card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsContainer = document.getElementById("cards");
    if (cardsContainer) {
      cardsContainer.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup function to remove event listener on unmount
    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (path === "/projects") {
      setProgrammatic(true);
      ref.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setProgrammatic(false);
      }, 500);
    } else if (path === "/") {
      setProgrammatic(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setProgrammatic(false);
      }, 500);
    }
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      if (programmatic) {
        return;
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPath("/projects");
      } else if (window.scrollY === 0) {
        setPath("/");
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [programmatic, setPath]);

  return (
    <div id="card-body" ref={ref}>
      <div id="cards" className="pb-4">
        {children}
      </div>
    </div>
  );
}
