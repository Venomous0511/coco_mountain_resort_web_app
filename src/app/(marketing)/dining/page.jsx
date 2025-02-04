import ScrollReveal from "@/components/ui/useScrollReveal";
import Image from "next/image";
import DiningStatsList from "./DiningStatsList";
import Menu from "./Menu";

export default function Dining() {
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
              Savor the Flavors of Paradise
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl/8">
              Elevate your culinary journey with a blend of global and local
              flavors, meticulously prepared to delight your palate, while you
              savor the beauty of our stunning surroundings.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <DiningStatsList />
          </div>
        </div>
      </section>

      {/* COCO HAVANA */}
      <section className="max-w-full h-screen px-0">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Left Image */}
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
            <div className="block sm:hidden lg:block lg:h-screen">
              <Image
                alt="Coco Havana"
                src="/images/pages/dining/coco-havana.jpg"
                width={1080}
                height={1080}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </ScrollReveal>

          {/* Right Content */}
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
            <div className="sm:h-screen flex flex-col justify-center items-center sm:items-center md:items-center lg:items-start p-6 text-center sm:text-center md:text-center lg:text-left">
              <Image
                alt="Tropical Bar Setup"
                src="/images/pages/dining/coco-havana-bar-front.jpg"
                width={1080}
                height={1080}
                priority
                className="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-lg"
              />

              <h3 className="mt-6 text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                Coco Havana
              </h3>

              <p className="mt-4 text-gray-700 dark:text-gray-400 leading-relaxed max-w-lg">
                Discover a dining experience like no other at Coco Havana. From
                vibrant flavors inspired by the tropics to expertly crafted
                cocktails, every moment is a celebration of taste and ambiance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MENU */}
      <section>
        <Menu />
      </section>
    </>
  );
}
