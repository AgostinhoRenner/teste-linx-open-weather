export function atualizarWeatherData(weatherData) {
  return {
    type: "UPDATE_WEATHER_DATA",
    payload: weatherData,
  };
}

export function atualizarForecastData(forecastItem) {
  return {
    type: "UPDATE_FORECAST_DATA",
    payload: forecastItem,
  };
}

export function limpaEstado() {
  return {
    type: "UNDEFINE_STATES",
    payload: undefined,
  };
}
