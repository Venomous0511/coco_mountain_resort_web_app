"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getWeatherByCoordinates } from "@/api/weather";

// WeatherIndicator Component
export default function WeatherIndicator() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const LAT = "14.7298"; // Latitude
  const LON = "121.15086"; // Longitude

  // Fetch weather data when component mounts
  useEffect(() => {
    getWeatherByCoordinates(LAT, LON)
      .then((data) => {
        setWeather({
          temp: data.main.temp.toFixed(2),
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          description: data.weather[0].description,
        });
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-gray-500">Loading...</div>;
  if (error)
    return <div className="text-red-500">Failed to load weather data</div>;

  return (
    <div className="bg-green-700 flex items-center justify-center max-w-xs mx-auto rounded-full overflow-hidden">
      <motion.div
        className="flex items-center p-1"
        initial={{ x: "-200%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <Image
          src={weather.icon}
          alt={weather.description}
          width={40}
          height={40}
        />

        <span className="text-white text-base font-semibold">
          {weather.temp}°C
        </span>
      </motion.div>
    </div>
  );
}
