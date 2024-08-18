"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width: number;
  height: number;
};

export const Logo = ({height,width}: LogoProps) => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition flex items-center gap-x-2">
        <Image
          src="/images/logo.svg"
          alt="collectify"
          width={width}
          height={height}
          className="dark:forced-color-adjust-auto"
        />
        <p className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
          Collectify
        </p>
      </div>
    </Link>
  );
};
