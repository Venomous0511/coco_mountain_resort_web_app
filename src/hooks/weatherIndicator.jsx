"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// WeatherIndicator Component
export default function WeatherIndicator() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const LAT = "14.7298"; // Latitude for your location
  const LON = "121.15086"; // Longitude for your location
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY; // Use environment variable

  // Fetch weather data when component mounts
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeather({
          temp: data.main.temp.toFixed(2),
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          description: data.weather[0].description,
        });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [API_KEY]);

  if (loading) return <div className="text-gray-500">Loading...</div>;
  if (error)
    return <div className="text-red-500">Failed to load weather data</div>;

  return (
    <div className="bg-green-700 flex items-center justify-center max-w-xs mx-auto rounded-full overflow-hidden">
      <motion.div
        className="flex items-center space-x-2"
        initial={{ x: "-150%" }}
        animate={{ x: "150%" }}
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
