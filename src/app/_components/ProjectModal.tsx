"use client";

import { getScrollContainer } from "@/lib/scrollContainer";
import Video from "@/components/Video/Video";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Fragment, ReactNode, useEffect, useRef } from "react";

export type ModalProject = {
  name: string;
  video: string;
  startTime?: number;
  description: ReactNode;
  caption?: ReactNode;
  links?: ReactNode[];
};

export function ProjectModal({
  project,
  onClose,
}: {
  project: ModalProject | null;
  onClose: (lastTime: number) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    onClose(videoRef.current?.currentTime ?? 0);
  };

  useEffect(() => {
    if (!project) return;

    const container = getScrollContainer();
    const previousOverflow = container?.style.overflow;
    if (container) container.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      if (container) container.style.overflow = previousOverflow ?? "";
      window.removeEventListener("keydown", handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="grid w-full max-w-3xl grid-cols-[1fr_auto] items-start gap-3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <article className="prose-invert prose max-h-[80vh] overflow-y-auto rounded-2xl border border-gray-800 bg-zinc-950 p-6 md:p-10">
              <h3>{project.name}</h3>
              {project.video && (
                <Video
                  ref={videoRef}
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  controls
                  startTime={project.startTime}
                  className="mb-4 w-full rounded-lg"
                />
              )}
              {project.caption}
              {project.description}
              {project.links && (
                <div className="flex flex-row">
                  {project.links.map((link, k) => (
                    <Fragment key={k}>{link}</Fragment>
                  ))}
                </div>
              )}
            </article>
            <button
              onClick={handleClose}
              aria-label="Close"
              className="rounded-full bg-zinc-600 p-3 transition-colors hover:bg-zinc-900"
            >
              <X size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
