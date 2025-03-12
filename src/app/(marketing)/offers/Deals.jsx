import Image from "next/image";

// Async function that calls the JSON data and revalidates every refresh
async function getDeals() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/deals`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch deals");
  }

  return res.json();
}

export default async function Deals() {
  let deals = [];

  try {
    // Calling the getDeals
    deals = await getDeals();
  } catch (error) {
    console.error("Error fetching deals:", error);
  }

  return (
    <div
      className={`grid gap-6 ${
        deals.length === 1 ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"
      } justify-center place-items-center`}
    >
      {deals.map((deal, index) => (
        <article
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg transition transform hover:scale-105 max-w-sm"
        >
          <Image
            alt={deal.name}
            width={1080}
            height={1080}
            src={deal.image}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative bg-gradient-to-t from-gray-900/60 to-gray-900/20 min-h-full pt-48 lg:pt-64">
            <div className="p-6">
              <time
                dateTime={deal.date}
                className="block text-xs text-white/80"
              >
                {deal.month}
              </time>
              <h3 className="mt-2 text-2xl font-bold text-white">
                {deal.name}
              </h3>
              <p className="mt-4 text-sm text-white/90">{deal.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
