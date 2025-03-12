import ScrollReveal from "@/components/ui/useScrollReveal";
import InputField from "./InputField";
import Image from "next/image";
import Link from "next/link";

export default function Weddings() {
  return (
    <>
      {/* BANNER */}
      <section className="relative max-w-full h-screen isolate bg-white dark:bg-gray-900 m-0 p-0 pt-10 md:pt-20">
        <div className="max-w-full h-screen m-0 p-0">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-8 items-center">
            {/* Bride Image */}
            <div className="aspect-square w-full justify-center hidden lg:flex">
              <ScrollReveal
                variants={{
                  hidden: { opacity: 0, x: -200 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: 0.4 },
                  },
                }}
              >
                <Image
                  src="/images/pages/weddings/bride.jpg"
                  width={1080}
                  height={1080}
                  className="object-cover w-full lg:h-full"
                  alt="Bride"
                />
              </ScrollReveal>
            </div>

            {/* Couple Image */}
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
                  src="/images/pages/weddings/couple.jpg"
                  width={1080}
                  height={1080}
                  className="object-cover w-full h-full"
                  alt="Couple"
                />
              </ScrollReveal>
            </div>

            {/* Groom Image */}
            <div className="aspect-square w-full justify-center hidden lg:flex">
              <ScrollReveal
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: 0.4 },
                  },
                }}
              >
                <Image
                  src="/images/pages/weddings/groom.jpg"
                  width={1080}
                  height={1080}
                  className="object-cover w-full lg:h-full"
                  alt="Groom"
                />
              </ScrollReveal>
            </div>
          </div>

          {/* Header Section */}
          <ScrollReveal
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
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
          </ScrollReveal>
        </div>
      </section>

      {/* Email Section */}
      <section className="py-4">
        <div className="relative inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 max-w-3xl">
            Email us at{" "}
            <Link
              href="mailto:coco.mountain@yahoo.com?subject=Wedding Inquiry"
              className="underline"
            >
              coco.mountain@yahoo.com
            </Link>{" "}
            and let Coco Mountain Resort make your celebration of love truly
            magical, unforgettable, and an experience that will be cherished
            forever.
          </p>
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
                {/* Name Fields */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-2">
                  <InputField
                    id="firstName"
                    label="First Name"
                    type="text"
                    required
                  />
                  <InputField
                    id="lastName"
                    label="Last Name"
                    type="text"
                    required
                  />
                </div>

                {/* Email */}
                <InputField id="email" label="Email" type="email" required />

                {/* Subject */}
                <InputField id="subject" label="Subject" type="text" required />

                {/* Message */}
                <div>
                  <label htmlFor="message" className="relative block">
                    <textarea
                      id="message"
                      rows="5"
                      className="peer w-full border-x-0 border-t-0 border-b-2 border-gray-900 dark:border-gray-100 focus:border-green-600 dark:focus:border-green-400 focus:ring-0 focus:ring-b-2 focus:ring-green-600 dark:focus:ring-green-400 bg-transparent placeholder-transparent focus:outline-none"
                      placeholder="Message"
                      required
                    ></textarea>

                    <span className="pointer-events-none absolute start-2.5 top-1/2 -translate-y-1/2 p-0.5 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Message <span className="text-xs">{"(required)"}</span>
                    </span>
                  </label>
                </div>

                {/* Guest Count */}
                <InputField
                  id="guest"
                  label="Guest Count"
                  type="number"
                  required
                  inputMode="numeric"
                />
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
