import Testimonial from "../../components/ui/Testimonial";

// Async function that call the json data and revalidate every it refresh
async function getTestimonials() {
  const res = await fetch("http://localhost:4000/testimonials", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function TestimonialsList() {
  // Calling the getTestimonials
  const testimonials = await getTestimonials();

  return (
    <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}
