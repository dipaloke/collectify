import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20 pb-20 bg-slate-100 dark:bg-inherit dark:text-inherit">
      <section className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col w-full">
          <div className="flex items-center border shadow-sm p-4 bg-indigo-100 text-indigo-700 rounded-full uppercase font-bold dark:bg-gradient-to-r from-violet-500 to-violet-700 dark:text-white">
            <Medal className="h-6 w-6 mr-2" />
            No 1 collection management
          </div>
          <h1 className="text-3xl md:text-6xl p-2 font-extrabold text-center text-gradient mt-2 mb-6">
            Organize Your Passion
          </h1>
          <div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 p-2 rounded-md pb-4 w-fit font-bold ">
            Work forward.
          </div>
        </div>
        <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto font-semibold">
          Create, collect & connect. <br /> From treasured items to unique
          collections, organize everything seamlessly with Collectify
        </div>
        <Button className="mt-10 font-bold" variant="action" asChild>
          <Link href="/signup">Get Collectify for Free</Link>
        </Button>
      </section>
      {/* tags */}
      {/* <section className="flex flex-col items-center justify-center">

      </section> */}
    </main>
  );
}
