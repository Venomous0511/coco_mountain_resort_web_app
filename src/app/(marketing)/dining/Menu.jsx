"use client";

import ScrollReveal from "@/components/ui/useScrollReveal";
import Image from "next/image";
import { useState, useEffect } from "react";

// Fetch dining items from JSON file
async function fetchDiningItems() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diningItems`, {
      next: {
        revalidate: 60, // Revalidate every 60 seconds
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Dining Items");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching dining items:", error);
    return [];
  }
}

export default function Menu() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [diningItems, setDiningItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDiningItems()
      .then((data) => {
        if (Array.isArray(data)) {
          setDiningItems(data);
        } else {
          console.error("Invalid data format:", data);
          setError("Invalid data format received from server.");
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch dining items.");
      });
  }, []);

  // Categorize and filter the items
  const filteredItems = diningItems.filter(
    (item) => filter === "All" || item.category === filter
  );

  // Slice the item to 3 to show all the item
  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 3);

  return (
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

      {error ? (
        <div className="mt-8 text-red-500">{error}</div>
      ) : (
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
            {itemsToShow.map((item) => (
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
      )}

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
  );
}
