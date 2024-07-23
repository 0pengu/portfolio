import { FaLinkedin } from "react-icons/fa";

export function LinkedIn({ url, name }: { url: string; name: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group">
      <button className="bg-zinc-600 mt-4 p-4 hover:bg-zinc-900 hover:transition-all transition-all hover:px-6 rounded-full">
        <div className="flex items-center">
          <FaLinkedin />
          <span className="hidden group-hover:inline-block ml-2 text-sm">
            {name}
          </span>
        </div>
      </button>
    </a>
  );
}
