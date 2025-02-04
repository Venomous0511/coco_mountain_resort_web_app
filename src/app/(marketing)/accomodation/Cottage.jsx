"use client";

import ScrollReveal from "@/components/ui/useScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// COTTAGES
const products = [
  {
    name: "Cabana 1",
    href: "/login",
    imageSrc: "/images/ui/cottage/Cabana.jpg",
    price: "₱ 1,000",
  },
  {
    name: "Cabana 2",
    href: "/login",
    imageSrc: "/images/ui/cottage/Cabana2.jpg",
    price: "₱ 1,500",
  },
  {
    name: "Cabana Family",
    href: "/login",
    imageSrc: "/images/ui/cottage/CabanaFamily.jpg",
    price: "₱ 2,000",
  },
  {
    name: "Cabana with Room",
    href: "/login",
    imageSrc: "/images/ui/cottage/CabanaRoom.jpg",
    price: "₱ 2,000",
  },
  {
    name: "Nipa with Room",
    href: "/login",
    imageSrc: "/images/ui/cottage/NipaRoom.jpg",
    price: "₱ 2,000",
  },
  {
    name: "Gazebo Table",
    href: "/login",
    imageSrc: "/images/ui/cottage/Gazebo.jpg",
    price: "₱ 800 per Table",
  },
];

export default function Cottage() {
  // Variable for every items
  const ITEMS_PER_PAGE = 3;

  // set a usestate
  const [currentPage, setCurrentPage] = useState(1);

  // length for item pages
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Get the items for the current page
  const currentItems = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <ScrollReveal
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 1,
            transition: { duration: 0.5, delay: 0.4 },
          },
        }}
      >
        <header>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            The Cottage Haven
          </h2>

          <p className="mt-4 max-w-md text-gray-500 dark:text-gray-400">
            A Tranquil Retreat Where Nature Meets Comfort, Offering You the
            Perfect Escape to Relax, Reconnect, and Rejuvenate
          </p>
        </header>

        <div className="mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span>
              {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
              {Math.min(currentPage * ITEMS_PER_PAGE, products.length)}
            </span>{" "}
            of {products.length}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 1,
            transition: { duration: 0.5, delay: 0.4 },
          },
        }}
      >
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((product) => (
            <li key={product.name}>
              <Link href={product.href} className="group block overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white dark:bg-gray-900 pt-3">
                  <h3 className="text-sm text-gray-700 dark:text-gray-300 group-hover:underline group-hover:underline-offset-4">
                    {product.name}
                  </h3>
                  <p className="mt-2">
                    <span className="tracking-wider text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-0 py-0 gap-0 inline-flex size-8 items-center justify-center rounded"
            >
              <span className="sr-only">Prev Page</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M15 19V5l-8 7z" />
              </svg>
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1}>
              <button
                onClick={() => setCurrentPage(index + 1)}
                className={`px-0 py-0 gap-0 block size-8 rounded border font-righteous ${
                  currentPage === index + 1
                    ? "border-black dark:border-white bg-black text-white dark:bg-white dark:text-gray-900"
                    : "border-gray-800 dark:border-gray-100"
                } text-center leading-8`}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-0 py-0 gap-0 inline-flex size-8 items-center justify-center rounded"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="m9 19l8-7l-8-7z" />
              </svg>
            </button>
          </li>
        </ol>
      </ScrollReveal>
    </>
  );
}
