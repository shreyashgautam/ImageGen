"use client";

import { navLinks } from "@/contants/index";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] min-h-screen bg-gradient-to-b from-white to-sky-50 border-r border-gray-200 shadow-md p-6 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <Link href="/" className="flex items-center mb-10">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={32}
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* SignedIn Navigation */}
        <SignedIn>
          <nav>
            <ul className="flex flex-col gap-2">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route}>
                    <Link
                      href={link.route}
                      className={`group flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                        isActive
                          ? "bg-teal-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`transition-all duration-300 ${
                          isActive ? "brightness-200" : "opacity-80 group-hover:opacity-100"
                        }`}
                      />
                      <span className="relative z-10">{link.label}</span>
                      {/* Active underline */}
                      {isActive && (
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-white rounded-full animate-pulse" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <hr className="my-6 border-gray-300" />

            <ul className="flex flex-col gap-2">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route}>
                    <Link
                      href={link.route}
                      className={`group flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                        isActive
                          ? "bg-teal-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`transition-all duration-300 ${
                          isActive ? "brightness-200" : "opacity-80 group-hover:opacity-100"
                        }`}
                      />
                      <span className="relative z-10">{link.label}</span>
                      {/* Active underline */}
                      {isActive && (
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-white rounded-full animate-pulse" />
                      )}
                    </Link>
                  </li>
                );
              })}

              <li className="mt-6 px-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </nav>
        </SignedIn>

        {/* SignedOut Button */}
        <SignedOut>
          <div className="mt-10">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-teal-500 to-sky-500 text-white font-semibold hover:brightness-110 transition-all"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </div>
        </SignedOut>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 text-center mt-6 select-none">
        © {new Date().getFullYear()} TravelMaker. All rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;
