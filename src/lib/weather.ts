export const getWeatherByCity = async (city: string) => {
    const apiKey = "8b2e71ce744873d3df2516834ee92208";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`
    );
  
    if (!response.ok) {
      throw new Error("Please enter the city name");
    }
  
    return response.json();
  };
  




  
// export const getWeatherByCity = async (city: string) => {
//   const apiKey = process.env.WEATHER_API_KEY;

//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`
//   );

//   if (!response.ok) {
//     throw new Error("Please enter the city name");
//   }

//   return response.json();
// };

