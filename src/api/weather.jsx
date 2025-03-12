// API for fetching weather data.
export async function getWeatherByCoordinates(lat, lon) {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return data;
}
