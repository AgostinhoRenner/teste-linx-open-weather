import { WeatherData, ForecastItem } from "../components/forecast/forecast";
interface RootState {
  weather: { weatherData: WeatherData | null };
  forecast: { forecastData: ForecastItem | null };
}

interface ActionType {
  type: string;
  payload: any;
}


interface WeatherState {
  weatherData: WeatherData | null;
}

interface ForecastState {
  forecastData: ForecastItem | null;
}

type DispatchType = (action: ActionType) => void;
