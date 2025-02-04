import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "./loading";
import StatsList from "./(marketing)/StatsList";
import TestimonialsList from "./(marketing)/TestimonialsList";
import FaqsList from "./(marketing)/FaqsList";
import ScrollReveal from "@/components/ui/useScrollReveal";

export default function Home() {
  return (
    <>
      {/* BANNER */}
      <section className="relative max-w-full h-screen mt-0">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-white/45 dark:bg-gray-900/75 md:bg-transparent md:from-white/55 dark:md:from-gray-900/75 md:to-white/0 dark:md:to-gray-900/10 md:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen flex justify-center items-center md:justify-end md:px-8">
          <div className="max-w-xl text-center md:text-right">
            <h1 className="text-3xl italic font-extrabold text-gray-950 dark:text-white md:text-5xl">
              Welcome to
              <strong
                className={`block font-extrabold text-green-700 dark:text-green-500 font-righteous`}
              >
                Coco Mountain
              </strong>
            </h1>

            <p className="mt-4 max-w-lg font-semibold italic text-gray-950 dark:text-white md:text-xl/relaxed">
              Your sanctuary of relaxation: a place to calm your mind and find
              peace after a rough day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-end items-center">
              <Link
                href="/singup"
                className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 md:w-auto"
              >
                Get Started
              </Link>

              <Link
                href="https://www.facebook.com/CocoMountainResort"
                target="_blank"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-semibold text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 md:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute -left-10 top-20 lg:top-40 rotate-90 bg-green-600 hover:bg-green-700 text-white px-4 py-1 transition-colors duration-300 cursor-pointer">
          <Link
            href="/login"
            className={`text-xs tracking-widest uppercase font-righteous`}
          >
            Book now!
          </Link>
        </div>
      </section>

      {/* STATS  */}
      <section>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Trusted by World-Class Resorts
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
              Delivering unforgettable guest experiences with tailored solutions
              for luxury hospitality.
            </p>
          </div>

          <Suspense fallback={<Loading />}>
            <StatsList />
          </Suspense>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="max-w-full px-0 bg-gray-200 dark:bg-gray-700 sm:grid sm:grid-cols-2 sm:items-center">
        <ScrollReveal
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 1,
              transition: { duration: 0.5, delay: 0.4 },
            },
          }}
        >
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                Experience the Ultimate Luxury at Our Resort
              </h2>

              <p className="hidden text-gray-500 dark:text-gray-400 md:mt-4 md:block">
                Indulge in world-class amenities and breathtaking views at our
                exclusive resort. Whether you&apos;re seeking relaxation or
                adventure, we have tailored packages to make your stay
                unforgettable.
              </p>

              <div className="mt-4 md:mt-8">
                <Link
                  href="/offers"
                  className="inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400"
                >
                  Explore Our Offers →
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 1,
              transition: { duration: 0.5, delay: 0.4 },
            },
          }}
        >
          <Image
            alt="Offers Image"
            src="/images/pages/home/CTA.jpg"
            width={500}
            height={0}
            className="h-full w-full object-cover sm:h-[calc(100%-2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%-4rem)] md:rounded-tl-[60px]"
          />
        </ScrollReveal>
      </section>

      {/* RESORT ROOMS AND COTTAGES */}
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center md:text-center">
            Explore Our Exclusive <br />
            Resort Rooms and Cottages
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 mt-8">
          {/* ROOMS */}
          <Link
            key="nyc-room"
            href="/login"
            className="group relative block overflow-hidden"
          >
            <ScrollReveal
              variants={{
                hidden: { opacity: 0, scale: 0.3 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                },
              }}
            >
              <Image
                src="/images/ui/rooms/nycroom.jpg"
                alt="NYC Room"
                width={1200}
                height={800}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 dark:border-gray-600 bg-white dark:bg-gray-700 p-6">
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  NYC Room
                </h3>
                <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-300">
                  ₱5,000 per schedule
                </p>
                <form className="mt-4">
                  <button className="block w-full rounded bg-green-700 p-4 text-sm font-medium text-white transition hover:scale-105">
                    View Details
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </Link>

          <Link
            key="standard-room"
            href="/login"
            className="group relative block overflow-hidden"
          >
            <ScrollReveal
              variants={{
                hidden: { opacity: 0, scale: 0.3 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                },
              }}
            >
              <Image
                src="/images/ui/rooms/standardroom.jpg"
                alt="Standard Room"
                width={1200}
                height={800}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 dark:border-gray-600 bg-white dark:bg-gray-700 p-6">
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  Standard Room
                </h3>
                <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-300">
                  ₱2,500 per schedule
                </p>
                <form className="mt-4">
                  <button className="block w-full rounded bg-green-700 p-4 text-sm font-medium text-white transition hover:scale-105">
                    View Details
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </Link>

          {/* COTTAGES */}
          <Link
            key="CabanaFamily"
            href="/login"
            className="group relative block overflow-hidden"
          >
            <ScrollReveal
              variants={{
                hidden: { opacity: 0, scale: 0.3 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                },
              }}
            >
              <Image
                src="/images/ui/cottage/CabanaFamily.jpg"
                alt="Cabana Family"
                width={1200}
                height={800}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 dark:border-gray-600 bg-white dark:bg-gray-700 p-6">
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  Cabana Family
                </h3>
                <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-300">
                  ₱2,000 per schedule
                </p>
                <form className="mt-4">
                  <button className="block w-full rounded bg-green-700 p-4 text-sm font-medium text-white transition hover:scale-105">
                    View Details
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </Link>

          <Link
            key="Gazebo"
            href="/login"
            className="group relative block overflow-hidden"
          >
            <ScrollReveal
              variants={{
                hidden: { opacity: 0, scale: 0.3 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                },
              }}
            >
              <Image
                src="/images/ui/cottage/Gazebo.jpg"
                alt="Gazebo"
                width={1200}
                height={800}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 dark:border-gray-600 bg-white dark:bg-gray-700 p-6">
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  Gazebo
                </h3>
                <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-300">
                  ₱800 per table
                </p>
                <form className="mt-4">
                  <button className="block w-full rounded bg-green-700 p-4 text-sm font-medium text-white transition hover:scale-105">
                    View Details
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </Link>
        </div>

        <div className="text-right mt-4">
          <ScrollReveal
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: {
                opacity: 1,
                x: 1,
                transition: { duration: 0.5, delay: 0.4 },
              },
            }}
          >
            <Link
              href="/rooms"
              className="text-green-700 hover:text-green-600 font-bold"
            >
              See more →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Read trusted reviews from our customers
            </h2>
          </ScrollReveal>

          <Suspense fallback={<Loading />}>
            <TestimonialsList />
          </Suspense>
        </div>
      </section>

      {/* FAQS */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center md:text-left mb-6">
          Frequently Asked Questions <br />
          About Your Resort Stay
        </h2>

        <ScrollReveal
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: {
              opacity: 1,
              x: 1,
              transition: { duration: 0.5, delay: 0.4 },
            },
          }}
        >
          <Suspense fallback={<Loading />}>
            <FaqsList />
          </Suspense>
        </ScrollReveal>
      </section>
    </>
  );
}
