import ScrollReveal from "@/components/ui/useScrollReveal";
import Image from "next/image";
import Link from "next/link";

export default function Meetings() {
  return (
    <>
      {/* BANNER */}
      <section className="relative max-w-full h-screen mt-0">
        <Image
          src="/images/pages/meetings/banner.jpg"
          width={1080}
          height={1080}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/45 dark:bg-gray-900/75 md:bg-transparent md:from-white/55 dark:md:from-gray-900/75 md:to-white/0 dark:md:to-gray-900/10 md:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl italic font-extrabold text-green-700 dark:text-green-500 md:text-5xl">
              Unforgettable Experiences Await
            </h1>

            <p className="mt-4 font-semibold italic text-gray-950 dark:text-white md:text-xl/relaxed">
              Join us at Coco Mountain Resort for an array of rejuvenating
              events designed to refresh your spirit and connect you with
              nature. From wellness retreats to thrilling outdoor adventures,
              there's something for everyone to enjoy
            </p>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
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
                <p className="max-w-xl text-2xl font-bold">
                  Plan Your Perfect Stay at Coco Mountain Resort
                </p>
                <p className="max-w-xl text-lg mt-5">
                  Tailored Recommendations for Unforgettable Experiences
                </p>

                <div className="mt-8">
                  <p className="font-bold pb-3">Get in Touch:</p>

                  <Link
                    href="tel:+639123456789"
                    className="text-2xl font-bold text-green-600"
                  >
                    +63 9123456789
                  </Link>

                  <address className="mt-2 not-italic">
                    Lot 1, Block 8 Lolo Tinong San Rafael, Rodriguez,
                    Philippines
                  </address>
                </div>
              </ScrollReveal>
            </div>

            <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg lg:col-span-3 lg:p-12">
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
                <form action="#" className="space-y-4">
                  <div className="grid grid-cols-1 gap-7">
                    <label htmlFor="email" className="relative block">
                      <input
                        type="text"
                        id="email"
                        className="peer w-full border-x-0 border-t-0 border-b-2 border-gray-900 dark:border-gray-100 focus:border-green-600 dark:focus:border-green-400 focus:ring-0 focus:ring-b-2 focus:ring-green-600 dark:focus:ring-green-400 bg-transparent placeholder-transparent focus:outline-none"
                        placeholder="email"
                      />

                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Email <span className="text-xs">{"(required)"}</span>
                      </span>
                    </label>

                    <label htmlFor="lastName" className="relative block">
                      <textarea
                        id="subject"
                        rows="5"
                        className="peer w-full border-x-0 border-t-0 border-b-2 border-gray-900 dark:border-gray-100 focus:border-green-600 dark:focus:border-green-400 focus:ring-0 focus:ring-b-2 focus:ring-green-600 dark:focus:ring-green-400 bg-transparent placeholder-transparent focus:outline-none"
                      ></textarea>

                      <span className="pointer-events-none absolute start-2.5 top-1/2 -translate-y-1/2 p-0.5 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Message <span className="text-xs">{"(required)"}</span>
                      </span>
                    </label>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black dark:bg-white px-5 py-3 font-medium text-white dark:text-gray-950 hover:opacity-70 sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
