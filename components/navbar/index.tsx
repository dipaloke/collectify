"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="container flex sticky top-0 z-50 gap-5 justify-between items-center px-10 py-3 font-bold border-b border-solid leading-[154.5%] max-md:flex-wrap max-md:px-5 bg-slate-50 shadow-sm dark:bg-slate-900/70">
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
          <p className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100 via-blue-900 to-cyan-900 bg-clip-text text-transparent">Collectify</p>
        </Link>
      </div>
      <div className="px-8 py-2  bg-slate-200/50 rounded-2xl dark:bg-inherit">
        <ul className="gap-5 justify-between self-stretch my-auto font-medium leading-5 md:flex max-md:flex-wrap max-md:max-w-full text-gray-700 hidden dark:text-inherit">
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
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="hover:bg-blue-500 hover:text-white font-semibold text-gray-700 dark:text-white "
        >
          <Link href="/">Sign in</Link>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
