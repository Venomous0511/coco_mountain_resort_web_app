// Async function that call the json data and revalidate every it refresh
async function getStats() {
  const res = await fetch("http://localhost:4000/homeStats", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function StatsList() {
  // Calling the getStatsList
  const stats = await getStats();

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
