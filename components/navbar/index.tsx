"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import SearchBar from "./searchbar";
import { Logo } from "../logo";
import {LoginButton} from "../auth/login-button";

export const Navbar = () => {
  return (
    <nav className="container flex sticky top-0 z-50 gap-5 justify-between items-center px-8 py-3 font-bold border-b border-solid leading-[154.5%] max-md:flex-wrap max-md:px-5 bg-slate-50 shadow-sm dark:bg-slate-900/70 transition-shadow">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Logo height={50} width={50} />
      </div>
      <div className="px-12 py-2 bg-slate-200/50 rounded-2xl dark:bg-inherit hidden md:flex">
        <ul className="gap-5 justify-between self-stretch my-auto font-medium leading-5  flex max-md:flex-wrap max-md:max-w-full text-gray-700  dark:text-inherit">
          <li>
            <Link className="hover:text-blue-500" href="/">
              Collection Manager
            </Link>

          </li>
        </ul>
        {/* TODO: Create a button to create Collection */}
      </div>
      <div className="flex gap-2 items-center space-x-2">
        <SearchBar />
        <LoginButton asChild mode="modal">
          <Button
            variant="outline"
            size="default"
            className="hover:bg-inherit hover:text-inherit font-semibold text-gray-700 dark:text-white asChild bg-transparent"
          >
            Sign In
          </Button>
        </LoginButton>
        <ThemeToggle />
      </div>
    </nav>
  );
};
