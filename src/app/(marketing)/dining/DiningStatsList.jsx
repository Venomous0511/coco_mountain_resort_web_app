"use client";

import { useState, useEffect } from "react";

// Async function that calls the JSON data and revalidates every time it refreshes
async function getStats() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diningStats`, {
      next: {
        revalidate: 60, // Revalidate every 60 seconds
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Dining Stats");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function DiningStatsList() {
  const [stats, setStats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStats()
      .then((data) => {
        if (Array.isArray(data)) {
          setStats(data);
        } else {
          console.error("Invalid data format:", data);
          setError("Invalid data format received from server.");
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch dining stats.");
      });
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-18 lg:mt-20">
      {stats.map((stat) => (
        <div key={stat.name} className="flex flex-col-reverse gap-1">
          <dt className="text-xs lg:text-base/7 text-gray-600 dark:text-gray-300">
            {stat.name}
          </dt>
          <dd className="text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
