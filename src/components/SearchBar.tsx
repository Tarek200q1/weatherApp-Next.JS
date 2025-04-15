"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherByCity } from "../lib/weather";
import { setWeather, setError } from "../store/weatherSlice";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const data = await getWeatherByCity(city);
      dispatch(setWeather(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError("An unknown error occurred."));
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeUp">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Please Enter The City "
        className="sm:w-3/4 border border-black text-black  text-center  font-bold text-3xl  px-4 py-2 rounded-lg w-full"
      />
      <button
        onClick={handleSearch}
        className=" w-full sm:w-1/4 bg-blue-500 text-white transition-all  px-4 py-2 rounded-lg hover:cursor-pointer"
      >
        Search
      </button>
    </div>
  );
}
