"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "./themeToggle";
import SearchBar from "./searchbar";

export const Navbar = () => {
  return (
    <nav className="container flex sticky top-0 z-50 gap-5 justify-between items-center px-8 py-3 font-bold border-b border-solid leading-[154.5%] max-md:flex-wrap max-md:px-5 bg-slate-50 shadow-sm dark:bg-slate-900/70 transition-shadow">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="collectify"
            sizes="100vw"
            style={{ width: "50px", height: "auto" }}
            width={0}
            height={0}
            className="dark:forced-color-adjust-auto"
          />
          <p className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
            Collectify
          </p>
        </Link>
      </div>
      <div className="px-8 py-2  bg-slate-200/50 rounded-2xl dark:bg-inherit hidden md:flex">
        <ul className="gap-5 justify-between self-stretch my-auto font-medium leading-5  flex max-md:flex-wrap max-md:max-w-full text-gray-700  dark:text-inherit">
          <li>
            <Link className="hover:text-blue-500" href="/">
              Collection Manager
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="/">
              Create Collection
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 items-center space-x-2">
        <SearchBar />
        <Button
          variant="outline"
          size="default"
          className="hover:bg-inherit hover:text-inherit font-semibold text-gray-700 dark:text-white "
        >
          <Link href="/">Sign in</Link>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
};
