// Async function that calls the JSON data and revalidates every time it refreshes
async function getStats() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/accomodationStats`,
      {
        next: {
          revalidate: 60, // Revalidate every 60 seconds
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch Accomodation Stats");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function AccomodationStatsList() {
  // Calling the getStats function
  const stats = await getStats();

  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-18 lg:mt-20">
      {stats.map((stat) => (
        <div key={stat.name} className="flex flex-col-reverse gap-1">
          <dt className="text-xs lg:text-base text-gray-600 dark:text-gray-300">
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
