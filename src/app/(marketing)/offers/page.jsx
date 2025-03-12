import ScrollReveal from "@/components/ui/useScrollReveal";
import Image from "next/image";
import OffersStatsList from "./OffersStatsList";
import Deals from "./Deals";
import Activities from "./Activities";

export default function Offers() {
  return (
    <>
      {/* BANNER */}
      <section className="relative max-w-full h-screen isolate bg-white dark:bg-gray-900 m-0 pt-16 sm:pt-40">
        {/* Decorative Elements */}
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#16a34a] to-[#16a34a] dark:from-[#02b832] dark:to-[#776fff] opacity-70 dark:opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#16a34a] to-[#16a34a] dark:from-[#02b832] dark:to-[#776fff] opacity-70 dark:opacity-30"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
              Experience Unmatched Luxury and Adventure
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl/8">
              Escape to a world where relaxation meets exhilaration. Enjoy
              stunning accommodations and a variety of activities, from water
              sports to exclusive dining experiences, all designed to make your
              stay unforgettable.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <OffersStatsList />
          </div>
        </div>
      </section>

      {/* DEALS */}
      <section>
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
          <div className="my-5 text-center">
            <h1 className="text-5xl font-righteous text-gray-800 dark:text-gray-100">
              Exclusive Resort Offers
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-500">
              Discover tailored deals designed to make your stay unforgettable.
            </p>
          </div>
        </ScrollReveal>

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
          <Deals />
        </ScrollReveal>
      </section>

      {/* DIVIDER */}
      <ScrollReveal
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.4 },
          },
        }}
      >
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        </span>
      </ScrollReveal>

      {/* ACTIVITIES */}
      <section className="max-w-full h-auto px-4 py-8">
        <Activities />
      </section>
    </>
  );
}
