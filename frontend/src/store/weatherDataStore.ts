import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  weather: function (state, action) {
    switch (action.type) {
      case "UPDATE_WEATHER_DATA":
        return {
          ...state,
          weatherData: action.payload,
        };
      case "UNDEFINE_STATES":
        console.log('weather', action.payload)
        return {
          ...state,
          weatherData: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  },
  forecast: function (state, action) {
    switch (action.type) {
      case "UPDATE_FORECAST_DATA":
        return {
          ...state,
          forecastData: action.payload,
        };
      case "UNDEFINE_STATES":
        console.log("forecast", action.payload);
        return {
          ...state,
          forecastData: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  },
});

export default function storeConfig() {
  return createStore(reducers);
}
