"use client";

import { RootState } from "@/store/store";
import { faCloud, faCloudSun, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export default function WeatherResult() {
  const { data, error } = useSelector((state: RootState) => state.weather);

  if (error) return <p className="text-red-500 text-center mt-5">{error}</p>;
  if (!data) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 mt-12">
        {/* Temperature */}
        <div
          style={{ backgroundColor: "#262936" }}
          className="w-full p-6 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <p className="mb-2 text-4xl text-gray-300">{data.name}</p>
          <FontAwesomeIcon icon={faCloudSun} size="2x" className="text-yellow-400 text-center" />
          <h2>
            <p className="mb-2 text-2xl font-semibold tracking-tight bg-transparent text-gray-300 dark:text-white mt-5">
              Temperature: <span className="text-white">{data.main.temp}</span> °C
            </p>
          </h2>
        </div>

        {/* Description */}
        <div
          style={{ backgroundColor: "#262936" }}
          className="w-full p-6 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <p className="mb-2 text-4xl text-gray-300">{data.name}</p>
          <FontAwesomeIcon icon={faCloud} size="2x" className="text-amber-100 text-center" />
          <h2>
            <p className="mb-2 text-2xl font-semibold tracking-tight bg-transparent text-gray-300 dark:text-white mt-5">
              Description: <span className="text-white">{data.weather[0].description}</span>
            </p>
          </h2>
        </div>

        {/* Humidity */}
        <div
          style={{ backgroundColor: "#262936" }}
          className="w-full p-6 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <p className="mb-2 text-4xl text-gray-300">{data.name}</p>
          <FontAwesomeIcon icon={faSnowflake} size="2x" className="text-amber-100 text-center" />
          <h2>
            <p className="mb-2 text-2xl font-semibold tracking-tight bg-transparent text-gray-300 dark:text-white mt-5">
              Humidity: <span className="text-white">{data.main.humidity}%</span>
            </p>
          </h2>
        </div>
      </div>
    </>
  );
}
