// Async function that calls the JSON data and revalidates every time it refreshes
async function getStats() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homeStats`, {
      next: {
        revalidate: 60, // Revalidate every 60 seconds
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch stats");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    return [];
  }
}

export default async function StatsList() {
  // Calling the getStats
  const stats = await getStats();

  if (stats.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        No stats available at the moment.
      </p>
    );
  }

  return (
    <dl className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-400 dark:divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
            {stat.name}
          </dt>
          <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
