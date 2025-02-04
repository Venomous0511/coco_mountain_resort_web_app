"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../molecules/Navbar";
import Link from "next/link";
import DarkModeToggle from "../ui/DarkModeToggle";
import Button from "../atoms/Button";

const links = [
  {
    href: "/",
    label: "Home",
    icon: "M21.743 12.331l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z",
  },
  {
    href: "/accomodation",
    label: "Accommodation",
    icon: "M6.012 18H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273c.112-.576.584-.717.988-.727zM8.648 7.642a2.224 2.224 0 0 1 3.125 0l.224.219l.223-.219a2.225 2.225 0 0 1 3.126 0a2.129 2.129 0 0 1 0 3.069L11.998 14l-3.349-3.289a2.128 2.128 0 0 1-.001-3.069z",
  },
  {
    href: "/dining",
    label: "Dining",
    icon: "M12 10h-2V3H8v7H6V3H4v8c0 1.654 1.346 3 3 3h1v7h2v-7h1c1.654 0 3-1.346 3-3V3h-2zm7-7h-1c-1.159 0-2 1.262-2 3v8h2v7h2V4a1 1 0 0 0-1-1",
  },
  {
    href: "/offers",
    label: "Offers",
    icon: "M20.749 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1h-2.199l-1.103-1.909a1.008 1.008 0 0 0-.607-.466a.993.993 0 0 0-.759.1L12 3.251l-1.91-1.105a1 1 0 0 0-1.366.366L7.62 4.422H5.421a1 1 0 0 0-1 1v2.199l-1.91 1.104a.998.998 0 0 0-.365 1.367L3.25 12l-1.104 1.908a1.004 1.004 0 0 0 .364 1.367l1.91 1.104v2.199a1 1 0 0 0 1 1h2.2l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135l1.908-1.104l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1v-2.199l1.91-1.104a1 1 0 0 0 .365-1.367L20.749 12zM9.499 6.99a1.5 1.5 0 1 1-.001 3.001a1.5 1.5 0 0 1 .001-3.001zm.3 9.6l-1.6-1.199l6-8l1.6 1.199l-6 8zm4.7.4a1.5 1.5 0 1 1 .001-3.001a1.5 1.5 0 0 1-.001 3.001z",
  },
  {
    label: "Gathering",
    icon: "M21 15c0-4.625-3.507-8.441-8-8.941V4h-2v2.059c-4.493.5-8 4.316-8 8.941v2h18v-2zM2 18h20v2H2z",
    subLinks: [
      { href: "/weddings", label: "Weddings" },
      { href: "/meetings", label: "Meetings & Events" },
    ],
  },
  {
    href: "/reach",
    label: "Reach Us",
    icon: "M21.555 8.168l-9-6a1 1 0 0 0-1.109 0l-9 6A.995.995 0 0 0 2.004 9H2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9h-.004a.997.997 0 0 0-.441-.832zM20 12.7L12 17l-8-4.3v-2.403l8 4.299l8-4.299V12.7z",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="font-righteous mx-auto sticky top-0 z-50">
      {/* ANNOUNCEMENT */}
      <div
        className={`bg-green-600 px-4 py-3 text-white transition-transform duration-200 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <p className="text-center text-[.5rem] sm:text-sm font-medium">
          Love luxurious resorts?{" "}
          <Link href="#" className="inline-block underline hover:text-gray-200">
            Discover our exclusive resort packages!
          </Link>
        </p>
      </div>

      {/* NAVBAR */}
      <div
        className={`h-14 w-full bg-gradient-to-r pb-[0.1rem] transition-transform duration-200 ${
          isScrolled
            ? "bg-transparent -translate-y-[70%] sm:-translate-y-[80%]"
            : "from-transparent via-green-500 to-transparent translate-y-0"
        }`}
      >
        <div
          className={`h-full w-full flex items-center justify-between px-6 lg:px-8 ${
            isScrolled
              ? "backdrop-blur-sm bg-white/70 dark:bg-gray-800/50"
              : "bg-white dark:bg-gray-800"
          }`}
        >
          <Navbar />

          <div className="flex items-center gap-0 lg:gap-4">
            <DarkModeToggle />

            <div className="hidden md:flex gap-2">
              <Button className="px-5 py-2 bg-green-500 text-white hidden lg:flex">
                Log in
              </Button>
              <Button className="px-5 py-2 text-green-500 hover:bg-green-700/20">
                Register
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                className="transition p-1 text-slate-400 hover:text-green-700 dark:hover:text-slate-50"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="visible scale-100 ease-in-out duration-300 absolute top-10 inset-x-0 p-2 transform origin-top-right z-40 md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white/80 dark:bg-gray-800/95 divide-y divide-gray-200 dark:divide-gray-500">
            <div className="pt-2 pb-6 px-5">
              <div className="flex items-center justify-end">
                <Button
                  className="transition p-1 text-slate-400 hover:text-rose-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"
                    />
                  </svg>
                </Button>
              </div>

              <nav className="mt-6 grid gap-y-8" aria-label="Global">
                {links.map((link, index) =>
                  link.subLinks ? (
                    <li key={index} className="relative list-none">
                      <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between rounded-lg">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-6 text-green-500"
                              viewBox="0 0 24 24"
                            >
                              <path fill="currentColor" d={link.icon} />
                            </svg>

                            <span className="ml-3 text-sm font-medium">
                              {link.label}
                            </span>
                          </div>

                          <span className="shrink-0 transition duration-75 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m6.293 13.293l1.414 1.414L12 10.414l4.293 4.293l1.414-1.414L12 7.586z"
                              />
                            </svg>
                          </span>
                        </summary>

                        <ul className="mt-2 space-y-1 px-4">
                          {link.subLinks.map((subLink, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subLink.href}
                                className="block font-lora rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"
                                onClick={() => setOpen(false)}
                              >
                                {subLink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ) : (
                    <Link
                      key={index}
                      href={link.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                      onClick={() => setOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6 text-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path fill="currentColor" d={link.icon} />
                      </svg>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-slate-100">
                        {link.label}
                      </span>
                    </Link>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
