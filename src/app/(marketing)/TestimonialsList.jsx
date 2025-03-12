import Testimonial from "../../components/ui/Testimonial";

// Async function that calls the JSON data and revalidates every time it refreshes
async function getTestimonials() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`, {
      next: {
        revalidate: 60, // Revalidate every 60 seconds
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch testimonials");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export default async function TestimonialsList() {
  // Calling the getTestimonials
  const testimonials = await getTestimonials();

  if (testimonials.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        No testimonials available at the moment.
      </p>
    );
  }

  return (
    <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}
