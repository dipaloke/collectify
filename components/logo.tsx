"use client";

import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition hidden md:flex items-center gap-x-2">
        <Image
          src="/images/logo.svg"
          alt="collectify"
          width={30}
          height={30}
          className="dark:forced-color-adjust-auto"
        />
        <p className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
          Collectify
        </p>
      </div>
    </Link>
  );
};
