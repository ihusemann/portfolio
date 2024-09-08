import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function ProjectLink({ href, title, description }: Props) {
  return (
    <Link
      className="px-6 py-4 block relative bg-white bg-opacity-[1%] rounded-xl group hover:bg-opacity-[2%] transition ease-out"
      href={href}
    >
      <ArrowUpRightIcon className="absolute right-4 top-4 h-5 w-5 text-zinc-400 opacity-0 group-hover:opacity-100 transition ease-out" />
      <h2 className="text-base font-semibold text-zinc-300 font-mono">
        {title}
      </h2>
      <p className="text-sm text-zinc-500 mt-2">{description}</p>
    </Link>
  );
}
