import type { ForecastItem, WeatherData } from "../../components/forecast/forecast";
import type { ActionType } from "../reduxStoreTypes";

export function atualizarWeatherData(weatherData: WeatherData) {
  return {
    type: "UPDATE_WEATHER_DATA",
    payload: weatherData,
  };
}

export function atualizarForecastData(forecastItem: ForecastItem): ActionType {
  return {
    type: "UPDATE_FORECAST_DATA",
    payload: forecastItem,
  };
}

export function limpaEstado(): ActionType {
  return {
    type: "UNDEFINE_STATES",
    payload: undefined,
  };
}
