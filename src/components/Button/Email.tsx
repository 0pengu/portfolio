import { MdOutlineEmail } from "react-icons/md";

export function Email({ url, email }: { url: string; email: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group">
      <button className=" bg-zinc-600 mt-6 p-4 hover:bg-zinc-900 hover:transition-all transition-all hover:px-6 rounded-full">
        <div className="flex items-center">
          <MdOutlineEmail />
          <span className="hidden group-hover:inline-block ml-2 text-sm">
            {email}
          </span>
        </div>
      </button>
    </a>
  );
}
