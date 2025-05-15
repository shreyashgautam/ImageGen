"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/contants/index";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white shadow-sm md:hidden">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={160}
          height={28}
          className="hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <nav className="flex items-center gap-4">
        <SignedIn>
          {/* User Avatar */}
          <UserButton afterSignOutUrl="/" />

          {/* Mobile Menu Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Image
                  src="/assets/icons/menu.svg"
                  alt="menu"
                  width={28}
                  height={28}
                  className="cursor-pointer"
                />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:w-64 bg-white p-6">
              {/* Logo inside Sheet */}
              <div className="mb-8">
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={140}
                  height={24}
                />
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li key={link.route}>
                      <Link
                        href={link.route}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow"
                            : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                        }`}
                      >
                        <Image
                          src={link.icon}
                          alt={link.label}
                          width={22}
                          height={22}
                          className={`${
                            isActive ? "brightness-200" : "opacity-80"
                          }`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>

        {/* Signed Out Login Button */}
        <SignedOut>
          <Button
            asChild
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:brightness-110"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
