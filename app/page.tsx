"use client";
import { Hero } from "@/components/marketing/hero";

export default function Home() {
  return (
    <main className="pt-20 pb-20 min-h-screen bg-slate-100 dark:bg-inherit dark:text-inherit">
      <Hero buttonHref="/auth/register" />
      {/* TODO: make tags dynamic */}
      <section className="flex items-center justify-center">
        <div className=""></div>
      </section>
    </main>
  );
}
