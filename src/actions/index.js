import axios from "axios";

const WEATHER_ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?";
const WEATHER_API_KEY = "&APPID=d5e8ce2e4e7e94c6e089a7ba62f90074";

export function fetchWeather(city, noofdays) {
  const request = 
    axios.get(`${WEATHER_ROOT_URL}q=${city}&mode=json&units=metric&cnt=${noofdays}${WEATHER_API_KEY}`);
  console.log(request);
  return {
    type: 'FETCH_WEATHER',
    payload: request
  };
}