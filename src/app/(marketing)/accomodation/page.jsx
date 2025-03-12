import ScrollReveal from "@/components/ui/useScrollReveal";
import Image from "next/image";
import Link from "next/link";
import AccomodationList from "./AccomodationStatsList";
import Cottage from "./Cottage";

export default function Accomodation() {
  return (
    <>
      {/* BANNER */}
      <section className="relative max-w-full h-screen isolate bg-white dark:bg-gray-900 m-0 pt-16 sm:pt-40">
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
              Experience the Ultimate Resort Getaway
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl">
              Escape to paradise. Our resort offers luxurious accommodations,
              world-class amenities, and breathtaking views. Unwind with a
              variety of activities designed for relaxation and adventure.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 text-base font-semibold text-gray-900 dark:text-white lg:gap-x-10">
              <Link href="/accomodation">
                Book Your Stay <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/">
                Explore Our Resort <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/offers">
                Exclusive Offers <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/gathering">
                Gatherings <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <AccomodationList />
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="max-w-screen-2xl">
        <div className="space-y-20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="flex-shrink-0 order-1">
                <Image
                  src={"/images/ui/rooms/nycroom.jpg"}
                  alt={"NYC Room"}
                  width={1200}
                  height={800}
                  className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-full aspect-square lg:aspect-video"
                />
              </div>

              <div className="text-left order-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  NYC Room
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  ₱5,000 per schedule, which includes exclusive access to the
                  room and all its amenities, ensuring a comfortable and premium
                  experience throughout your booking.
                </p>

                <Link
                  href="/NYCRoom"
                  className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  View Details <span aria-hidden="true">&rarr;</span>
                </Link>

                <div className="mt-8 lg:mt-12"></div>
                <Link
                  href="/login"
                  className="bg-green-700 hover:bg-green-800 text-white py-4 px-10"
                >
                  Reserve
                </Link>
              </div>
            </div>
          </ScrollReveal>

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="flex-shrink-0 order-1 lg:order-2">
                <Image
                  src={"/images/ui/rooms/standardroom.jpg"}
                  alt={"Standard Room"}
                  width={1200}
                  height={800}
                  className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-full aspect-square lg:aspect-video"
                />
              </div>

              <div className="text-left lg:text-right order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Standard Room
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  ₱2,500 per schedule, which includes exclusive access to the
                  room ensuring a comfortable and standard experience throughout
                  your booking.
                </p>

                <Link
                  href="/StandardRoom"
                  className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  View Details <span aria-hidden="true">&rarr;</span>
                </Link>

                <div className="mt-8 lg:mt-12">
                  <Link
                    href="/login"
                    className="bg-green-700 hover:bg-green-800 text-white py-4 px-10"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="flex-shrink-0 order-1">
                <Image
                  src={"/images/ui/rooms/room3.jpg"}
                  alt={"Room 3"}
                  width={1200}
                  height={800}
                  className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-full aspect-square lg:aspect-video"
                />
              </div>

              <div className="text-left order-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Room 3
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  ₱ 3,000 per sched, which includes exclusive access to the
                  room, ensuring a comfortable throughout your booking.
                </p>

                <Link
                  href="/Room3"
                  className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  View Details <span aria-hidden="true">&rarr;</span>
                </Link>

                <div className="mt-8 lg:mt-12">
                  <Link
                    href="/login"
                    className="bg-green-700 hover:bg-green-800 text-white py-4 px-10"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COTTAGE */}
      <section>
        <Cottage />
      </section>
    </>
  );
}
