import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul");
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const api = "2d52c39f5964b7670f305ccbc6532f87";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric&lang=tr&cnt=40`;

    axios(url)
      .then((res) => {
        const dailyWeatherData = res.data.list.filter(
          (data, index) => index % 8 === 0
        );
        setWeatherData(dailyWeatherData);
      })
      .catch((e) => console.log(e));
  }, [city]);

  console.log(weatherData);

  const values = {
    city,
    setCity,
    weatherData,
    setWeatherData,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
