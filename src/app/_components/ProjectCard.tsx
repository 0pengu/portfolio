import Video from "@/components/Video/Video";
import { ReactNode } from "react";

export function ProjectCard({
  name,
  video,
  blurb,
  forcePause,
  videoRef,
  onClick,
}: {
  name: string;
  video: string;
  blurb: ReactNode;
  forcePause?: boolean;
  videoRef?: (el: HTMLVideoElement | null) => void;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-800 bg-white/5 text-left transition-colors hover:border-gray-600"
    >
      <Video
        ref={videoRef}
        src={video}
        autoPlay
        muted
        loop
        controls={false}
        forcePause={forcePause}
        className="aspect-video w-full object-cover"
      />
      <div className="p-4">
        <h3 className="mb-1">{name}</h3>
        <p className="text-sm text-gray-400">{blurb}</p>
      </div>
    </button>
  );
}
