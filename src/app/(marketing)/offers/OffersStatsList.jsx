// Async function that calls the JSON data and revalidates every refresh
async function getStats() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offersStats`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch stats");
  }

  return res.json();
}

export default async function OffersStatsList() {
  let stats = [];

  try {
    // Calling the getStats
    stats = await getStats();
  } catch (error) {
    console.error("Error fetching stats:", error);
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
