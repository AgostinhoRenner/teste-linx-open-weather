interface Clouds {
  all: number;
}

interface Sys {
  pod: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface ForecastItem {
  dt: number; // Timestamp (data/hora em segundos)
  dt_txt: string;
  main: Main;
  weather: Weather[]; // <-- É um ARRAY de objetos Weather
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number; // Probability of precipitation
  sys: Sys;
  rain?: Rain;
}

interface Coordinates {
  lat: number;
  lon: number;
}

interface City {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Rain {
  "3h": number; // Propriedade com aspas precisa ser declarada como string
}
export interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[]; // <-- O ARRAY principal de previsões!
  city: Cidade;
}