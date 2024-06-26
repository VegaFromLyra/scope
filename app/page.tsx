import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <a href="/survey">Survey JS</a>
              <p className="mt-4 text-center">Neo4J</p>
              <p className="mt-4 text-center">Large Language Model</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
