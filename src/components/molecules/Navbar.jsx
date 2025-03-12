"use client";

import React, { useState, useRef, useEffect } from "react";
import Pills from "../atoms/Pills";
import Button from "../atoms/Button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="sr-only">Coco Mountain Resort Logo</span>

        <Image
          src="/images/ui/logo.png"
          alt="Coco Mountain Resort Logo"
          className="aspect-square"
          width={30}
          height={30}
          quality={100}
        />

        <h3 className="hidden xl:block text-gray-800 dark:text-white">
          Coco Mountain Resort
        </h3>

        <Pills className="bg-green-100 text-green-500">v1.0</Pills>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global" className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/accomodation">Accomodation</Link>
          <Link href="/dining">Dining</Link>
          <Link href="/offers">Offers</Link>
          <div className="relative p-0" ref={dropdownRef}>
            <div className="inline-flex items-center overflow-hidden">
              <Button
                onClick={toggleDropdown}
                className="dark:text-slate-100 hover:text-green-700 hover:dark:text-green-500"
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Gathering</span>
                Gathering
              </Button>
            </div>

            {isOpen && (
              <div
                className="absolute start-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
                role="menu"
              >
                <div className="p-2 font-lora">
                  <Link
                    href="/weddings"
                    className="block rounded-lg px-4 py-2 text-sm hover:bg-gray-50 hover:text-green-700 dark:text-slate-100 dark:hover:bg-gray-800 dark:hover:text-green-500"
                    role="menuitem"
                  >
                    Weddings
                  </Link>

                  <Link
                    href="/meetings"
                    className="block rounded-lg px-4 py-2 text-sm hover:bg-gray-50 hover:text-green-700 dark:text-slate-100 dark:hover:bg-gray-800 dark:hover:text-green-500"
                    role="menuitem"
                  >
                    Meetings & Events
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/reach">Reach Us</Link>
        </nav>
      </div>
    </>
  );
}
