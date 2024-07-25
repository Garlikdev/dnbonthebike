"use client";

import { ModeToggle } from "@/components/theme/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const navigation = [
  {
    name: "Events",
    href: "/",
  },
  {
    name: "Tracklists",
    href: "/tracklists",
  },
  {
    name: "Contact",
    href: "mailto:bookings@domwhiting.co.uk",
  },
];

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-center gap-4 border-b bg-background/80 shadow-lg">
      <nav className="container flex items-center justify-between">
        <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/DomWhiting_FanPage_small.webp"
              alt="Logo"
              width={495}
              height={46}
              className="mr-4 max-w-64 invert transition-transform hover:scale-105 dark:invert-0" // Margin to the right for spacing
            />
            <span className="sr-only">Dom Whiting Fan Page</span>
          </Link>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <HamburgerMenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="flex items-center">
                <Image
                  src="/DomWhiting_FanPage_small.webp"
                  alt="Logo"
                  width={495}
                  height={46}
                  className="mr-4 w-2/3" // Margin to the right for spacing
                />
                <span className="sr-only">Dom Whiting Fan Page</span>
              </Link>
              {navigation.map((item) => (
                <SheetTrigger key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </SheetTrigger>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Nav;
