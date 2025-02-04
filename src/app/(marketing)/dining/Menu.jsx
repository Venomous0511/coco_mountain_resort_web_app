"use client";

import ScrollReveal from "@/components/ui/useScrollReveal";
import Image from "next/image";
import { useState } from "react";

// DINING MENU
const diningItems = [
  {
    name: "Seafood Platter",
    imageSrc: "/images/pages/dining/seafood-platter.jpg",
    price: "₱ 1,200",
    category: "Main Course",
  },
  {
    name: "Grilled Steak",
    imageSrc: "/images/pages/dining/grilled-steak.jpg",
    price: "₱ 1,500",
    category: "Main Course",
  },
  {
    name: "Vegetarian Pizza",
    imageSrc: "/images/pages/dining/vegetarian-pizza.jpg",
    price: "₱ 800",
    category: "Main Course",
  },
  {
    name: "Pasta Alfredo",
    imageSrc: "/images/pages/dining/pasta-alfredo.jpg",
    price: "₱ 700",
    category: "Pasta",
  },
  {
    name: "Cake",
    imageSrc: "/images/pages/dining/cake.jpg",
    price: "₱ 600",
    category: "Dessert",
  },
  {
    name: "Coffee",
    imageSrc: "/images/pages/dining/coffee.jpg",
    price: "₱ 100",
    category: "Beverage",
  },
  {
    name: "Lemon Juice",
    imageSrc: "/images/pages/dining/lemon-juice.jpg",
    price: "₱ 100",
    category: "Beverage",
  },
  {
    name: "Wine",
    imageSrc: "/images/pages/dining/wine.jpg",
    price: "₱ 500",
    category: "Beverage",
  },
];

export default function Menu() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Categorize and filter the items
  const filteredItems = diningItems.filter(
    (item) => filter === "All" || item.category === filter
  );

  // Slice the item to 3 to show all the item
  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
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
              Dining Menu
            </h2>
            <p className="mt-4 max-w-md text-gray-500 dark:text-gray-400">
              Explore our exquisite dining options, crafted to offer a perfect
              blend of flavors and presented with elegance.
            </p>
          </header>
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
          <div className="mt-8">
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 text-sm">
              {["All", "Main Course", "Pasta", "Dessert", "Beverage"].map(
                (category) => (
                  <li className="mb-2 md:mb-0" key={category}>
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded ${
                        filter === category
                          ? "bg-green-500 text-white hover:bg-green-600" // Active button styles
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Inactive button styles
                      }`}
                      onClick={() => setFilter(category)}
                    >
                      {category}
                    </button>
                  </li>
                )
              )}
            </ul>
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
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {itemsToShow
              .filter((item) => filter === "All" || item.category === filter)
              .map((item) => (
                <li key={item.name}>
                  <div className="group block overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />
                    <div className="relative bg-white dark:bg-gray-900 pt-3">
                      <h3 className="text-sm text-gray-700 dark:text-gray-300 group-hover:underline group-hover:underline-offset-4">
                        {item.name}
                      </h3>
                      <p className="mt-2">
                        <span className="tracking-wider text-gray-900 dark:text-white">
                          {item.price}
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: {
              opacity: 1,
              x: 1,
              transition: { duration: 0.5, delay: 0.4 },
            },
          }}
        >
          <div className="mt-8 text-right flex justify-end">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
