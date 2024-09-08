import Link from "next/link";
import ProjectLink from "./project-link";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen grid grid-cols-1 grid-rows-[1fr,auto]">
      <main className="h-full flex flex-col items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-sm mx-auto">
          <div className="sm:px-6 pt-8">
            <h1 className="text-3xl font-semibold">Isaac Husemann</h1>
            <p className="text-base mt-0.5 text-zinc-500">
              Full-stack developer
            </p>
          </div>

          <div className="flex flex-col divide-zinc-700 mt-8 gap-y-4">
            <ProjectLink
              href="https://www.npmjs.com/package/ivy-orm"
              title="ivy-orm"
              description='A TypeScript-based "ORM" for Azure AI Search.'
            />
            <ProjectLink
              href="https://www.npmjs.com/package/ivy-kit"
              title="ivy-kit"
              description="A CLI tool for ivy-orm to handle migrations to Azure AI Search.  "
            />
          </div>
        </div>
      </main>
      <div className="pb-6 pt-4 px-4 sm:px-8">
        <div className="w-full max-w-sm px-6 mx-auto flex items-center justify-center">
          <Link
            href="https://github.com/ihusemann"
            className="text-zinc-400 text-sm font-mono px-3 py-1.5 rounded-lg hover:bg-white hover:bg-opacity-[2%] transition ease-out"
          >
            github
          </Link>
          <Link
            href="https://linkedin.com/in/ihusemann"
            className="text-zinc-400 text-sm font-mono px-3 py-1.5 rounded-lg hover:bg-white hover:bg-opacity-[2%] transition ease-out"
          >
            linkedin
          </Link>
          <Link
            href="mailto:isaac.husemann@gmail.com"
            className="text-zinc-400 text-sm font-mono px-3 py-1.5 rounded-lg hover:bg-white hover:bg-opacity-[2%] transition ease-out"
          >
            email
          </Link>
        </div>
      </div>
    </div>
  );
}
