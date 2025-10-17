interface WeatherInfo {
  weather: [{ icon: string }];
  dt: Date;
  main: { temp: number };
  wind: { speed: number };
  clouds: { all: number };
}

// 1. Interface para os dados de "Clouds"
interface Clouds {
  all: number;
}

// 2. Interface para os dados de "Main"
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

// 3. Interface para o array de "Weather"
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// 4. Interface para os dados de "Wind"
interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

// 5. Interface para os dados de "Sys"
interface Sys {
  pod: string;
}

// 6. Interface Principal para o Objeto de Previsão (ForecastItem)
export interface ForecastItem {
  dt: number; // Timestamp (data/hora em segundos)
  dt_txt: string; // Data/hora formatada
  main: Main;
  weather: Weather[]; // <-- É um ARRAY de objetos Weather
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number; // Probability of precipitation
  sys: { pod: string };
}