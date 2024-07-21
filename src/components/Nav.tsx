"use client";

import { ModeToggle } from "@/components/theme/ModeToggle";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="relative flex h-fit justify-center bg-neutral-400 px-4 py-2 dark:bg-neutral-800">
      <nav className="flex h-16 max-w-full flex-1 items-center justify-between lg:max-w-6xl">
        <Link href="/" className="flex items-center">
          <Image
            src="/DomWhiting_FanPage_small.webp"
            alt="Logo"
            width={495}
            height={46}
            className="mr-4" // Margin to the right for spacing
          />
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Nav;
