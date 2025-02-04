import ScrollReveal from "@/components/ui/useScrollReveal";
import Image from "next/image";
import Link from "next/link";

export default function Weddings() {
  return (
    <>
      {/* BANNER */}
      <section className="relative max-w-full h-screen isolate bg-white dark:bg-gray-900 m-0 p-0 pt-10 md:pt-20">
        <div className="max-w-full h-screen m-0 p-0">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-8 items-center">
            <div className="aspect-square w-full flex justify-center hidden lg:flex">
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
                <Image
                  src={"/images/pages/weddings/bride.jpg"}
                  width={1080}
                  height={1080}
                  className="object-cover w-full lg:h-full"
                  alt="Bride"
                />
              </ScrollReveal>
            </div>

            <div className="aspect-video w-full lg:col-span-2">
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
                  src={"/images/pages/weddings/couple.jpg"}
                  width={1080}
                  height={1080}
                  className="object-cover w-full h-full"
                  alt="Couple"
                />
              </ScrollReveal>
            </div>

            <div className="aspect-square w-full flex justify-center hidden lg:flex">
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
                <Image
                  src={"/images/pages/weddings/groom.jpg"}
                  width={1080}
                  height={1080}
                  className="object-cover w-full lg:h-full"
                  alt="Groom"
                />
              </ScrollReveal>
            </div>
          </div>

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
            <div className="relative inset-0 flex flex-col justify-center items-center text-center pt-10 px-4 md:px-8">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
                Celebrate Love Anew at Coco Mountain Resort
              </h1>

              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-3xl">
                Exchange Your Vows Amidst the Majestic Peaks and Let Your Love
                Soar as You Bask in the Warm Glow of a Golden Sunset,
                Overlooking the Serene Beauty of our Enchanting Cliffside Venue.
              </p>
            </div>

            <div className="relative inset-0 flex flex-col justify-center items-center text-center pt-10 px-4 md:px-8">
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 max-w-3xl">
                Email us at{" "}
                <Link
                  href={
                    "mailto:coco.mountain@yahoo.com?subject=Subject%20Here&body=Body%20Text%20Here"
                  }
                  className="underline"
                >
                  coco.mountain@yahoo.com
                </Link>{" "}
                and let Coco Mountain Resort make your celebration of love truly
                magical, unforgettable, and an experience that will be cherished
                forever.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WEDDING FORM */}
      <section className="p-0 my-0">
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
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-base font-bold sm:text-2xl">
                Celebrate Your Forever at Coco Mountain Resort - Wedding Inquiry
                Form
              </h1>
            </div>

            <form action="#" className="mx-auto mb-0 mt-8 max-w-lg space-y-4">
              <div className="grid grid-cols-1 gap-7">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-2">
                  <label htmlFor="firstName" className="relative block">
                    <input
                      type="text"
                      id="firstName"
                      className="peer w-full border-x-0 border-t-0 border-b-2 border-gray-900 dark:border-gray-100 focus:border-green-600 dark:focus:border-green-400 focus:ring-0 focus:ring-b-2 focus:ring-green-600 dark:focus:ring-green-400 bg-transparent placeholder-transparent focus:outline-none"
                      placeholder="Firstname"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      First Name <span className="text-xs">{"(required)"}</span>
                    </span>
                  </label>

                  <label htmlFor="lastName" className="relative block">
                    <input
                      type="text"
                      id="lastName"
                      className="peer w-full border-x-0 border-t-0 border-b-2 border-gray-900 dark:border-gray-100 focus:border-green-600 dark:focus:border-green-400 focus:ring-0 focus:ring-b-2 focus:ring-green-600 dark:focus:ring-green-400 bg-transparent placeholder-transparent focus:outline-none"
                      placeholder="Lastname"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Last Name <span className="text-xs">{"(required)"}</span>
                    </span>
                  </label>
                </div>

                <div>
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
                </div>

                <div>
                  <label htmlFor="subject" className="relative block">
                    <input
                      type="text"
                      id="subject"
                      className="peer w-full border-x-0 border-t-0 border-b-2 border-gray-900 dark:border-gray-100 focus:border-green-600 dark:focus:border-green-400 focus:ring-0 focus:ring-b-2 focus:ring-green-600 dark:focus:ring-green-400 bg-transparent placeholder-transparent focus:outline-none"
                      placeholder="subject"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Subject <span className="text-xs">{"(required)"}</span>
                    </span>
                  </label>
                </div>

                <div>
                  <label htmlFor="subject" className="relative block">
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

                <div>
                  <label htmlFor="guest" className="relative block">
                    <input
                      type="number"
                      id="guest"
                      pattern="\d*"
                      inputMode="numeric"
                      className="peer w-full border-x-0 border-t-0 border-b-2 border-gray-900 dark:border-gray-100 focus:border-green-600 dark:focus:border-green-400 focus:ring-0 focus:ring-b-2 focus:ring-green-600 dark:focus:ring-green-400 bg-transparent placeholder-transparent focus:outline-none"
                      placeholder="guest"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Guest <span className="text-xs">{"(required)"}</span>
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-block rounded-none bg-green-500 px-8 py-5 text-sm font-medium text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
