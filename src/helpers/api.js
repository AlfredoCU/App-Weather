export const getWeather = async (city, country) => {
  try {
    const lang = "es";
    const celsius = "metric";
    const appId = "4e056320039ae5ed96f8f9909d4b66ba";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${appId}&lang=${lang}&units=${celsius}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET_WEATHER_ERROR", error);
  }
};
