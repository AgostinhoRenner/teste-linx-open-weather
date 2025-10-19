import { createStore, combineReducers } from "redux";

import type { ActionType, WeatherState, ForecastState } from "./reduxStoreTypes";

const INITIAL_WEATHER_STATE: WeatherState = {
  weatherData: null,
};

const INITIAL_FORECAST_STATE: ForecastState = {
  forecastData: null,
};

const reducers = combineReducers({
  weather: function (state: WeatherState = INITIAL_WEATHER_STATE, action: ActionType) {
    switch (action.type) {
      case "UPDATE_WEATHER_DATA":
        return {
          ...state,
          weatherData: action.payload,
        };
      case "UNDEFINE_STATES":
        return {
          ...state,
          weatherData: action.payload,
        };
      default:
        return state;
    }
  },
  forecast: function (state: ForecastState = INITIAL_FORECAST_STATE, action: ActionType) {
    switch (action.type) {
      case "UPDATE_FORECAST_DATA":
        return {
          ...state,
          forecastData: action.payload,
        };
      case "UNDEFINE_STATES":
        return {
          ...state,
          forecastData: action.payload,
        };
      default:
        return state;
    }
  },
});

export default function storeConfig() {
  return createStore(reducers);
}
