"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/useScrollReveal"; // Ensure the correct library is imported

const activities = [
  {
    title: "EAT",
    description:
      "Discover a dining experience like no other at Coco Havana. From vibrant flavors inspired by the tropics to expertly crafted cocktails, every moment is a celebration of taste and ambiance.",
    image: "/images/pages/offers/coco-havana-fullview.jpg",
  },
  {
    title: "SWIM",
    description:
      "Dive into crystal-clear waters and embrace the soothing sensation of the poolside experience. Perfect for relaxation or fitness.",
    image: "/images/pages/offers/coco-pool.jpg",
  },
  {
    title: "SLEEP",
    description:
      "Relax and unwind in our comfortable and serene rooms, ensuring you wake up rejuvenated and ready for the day.",
    image: "/images/pages/offers/coco-room.jpg",
  },
  {
    title: "BIKE",
    description:
      "Explore scenic routes and enjoy a refreshing bike ride through lush landscapes. A perfect activity for the adventurous spirit.",
    image: "/images/pages/offers/coco-bike.jpg",
  },
  {
    title: "HIKE",
    description:
      "Take a hike through the mountains, immersing yourself in nature and enjoying breathtaking views that will leave you speechless.",
    image: "/images/pages/offers/coco-hike.jpg",
  },
  {
    title: "REPEAT",
    description:
      "Keep the adventure alive by repeating the cycle. There's always more to explore, more to experience, and more to enjoy.",
    image: "/images/pages/offers/coco-repeat.jpg",
  },
];

function ActivityCard({ activity }) {
  return (
    <div className="flex flex-col justify-between items-center p-4 text-center h-full">
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
        <div className="flex justify-center items-center mb-4">
          <Image
            alt={activity.title}
            src={activity.image}
            width={1080}
            height={1080}
            className="h-48 w-full object-cover sm:h-64 md:h-72 lg:h-80 rounded-lg aspect-video sm:aspect-square"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
            {activity.title}
          </h3>
          <p className="mt-3 text-gray-700 text-justify dark:text-gray-400 leading-relaxed max-w-xs sm:max-w-md md:max-w-lg flex-grow">
            {activity.description}
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function Activities() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Activities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
}
