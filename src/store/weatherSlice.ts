'use client';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type WeatherData = {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};


type WeatherState = {
  data: WeatherData | null;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
};


const initialState: WeatherState = {
  data: null,
  error: null,
  status: "idle",
};


export const fetchWeatherByCoordinates = createAsyncThunk<WeatherData, { lat: number; lon: number }>(
  "weather/fetchByCoordinates",
  async ({ lat, lon }) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    return response.data;
  }
);


const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherData>) => {
      state.data = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCoordinates.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWeatherByCoordinates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherByCoordinates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { setWeather, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
