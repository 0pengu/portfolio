import { ReactNode } from "react";

export function ProjectCardCompact({
  name,
  blurb,
  onClick,
}: {
  name: string;
  blurb: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-1 flex-col justify-center overflow-hidden rounded-lg border border-gray-800 bg-white/5 p-6 text-left transition-colors hover:border-gray-600"
    >
      <h3 className="mb-1">{name}</h3>
      <p className="text-sm text-gray-400">{blurb}</p>
    </button>
  );
}
