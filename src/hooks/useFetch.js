import { useEffect, useState } from "react";
import { getWeather } from "../helpers/api";

export const useFetch = (city, country) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeather(city, country)
      .then(d => setWeather(d))
      .catch(error => console.error("USE_FETCH_ERROR", error));
  }, [city, country]);

  return weather;
};
