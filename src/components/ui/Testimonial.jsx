import Image from "next/image";
import Rating from "./Rating";
import ScrollReveal from "./useScrollReveal";

export default function Testimonial({ image, name, text, rating }) {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <ScrollReveal
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 1,
            transition: { duration: 0.5, delay: 0.4 },
          },
        }}
      >
        <blockquote className="rounded-lg bg-gray-50 dark:bg-gray-700 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <Image
              alt={name}
              src={image}
              width={500}
              height={500}
              className="size-14 rounded-full object-cover"
            />
            <div>
              <Rating rating={rating} />{" "}
              <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                {name}
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{text}</p>
        </blockquote>
      </ScrollReveal>
    </div>
  );
}
