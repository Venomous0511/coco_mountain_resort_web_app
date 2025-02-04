"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function weatherIndicator() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const LAT = "14.7298";
  const LON = "121.15086";
  const API_KEY = "f25d844f9a45b8995ff2eea57c5cd1fd";

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
  }, []);

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

        <span className="ms-8 text-base font-semibold text-white">
          {weather.temp}°C
        </span>
      </motion.div>
    </div>
  );
}
