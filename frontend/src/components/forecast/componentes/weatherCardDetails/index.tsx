import "./cardDetail.css";

import { converteKelvinCelsius, montaUrlIcone, getHoursFromTimeStamp, getDateFromTimeStamp } from "../utils";
import type { ForecastItem, WeatherData } from "../../forecast";

interface WeatherCardDetailsProps {
  weatherData: WeatherData;
  forecastForecastItem: ForecastItem;
}

export default function WeatherCardDetails({ weatherData, forecastForecastItem }: WeatherCardDetailsProps) {
  function cloudiness(volume: number) {
    if (volume < 31) return "Céu Limpo";
    if (volume < 61) return "Parcialmente Nublado";
    if (volume < 81) return "Nublado";
    if (volume < 101) return "Céu Encoberto";
  }

  return (
    <div className="card-detail-container">
      <div className="card-detail-header">
        <div id="cidade">{weatherData.city.name}</div>
        <img src={montaUrlIcone(forecastForecastItem.weather[0].icon.replace("n", "d"))} />
      </div>
      <div className="card-detail-body">
        <p>{converteKelvinCelsius(forecastForecastItem.main.temp)}</p>
        <p>{cloudiness(forecastForecastItem.clouds.all)}</p>
        <p>{getDateFromTimeStamp(forecastForecastItem.dt)}</p>
        <hr />
      </div>
      <div className="card-detail-footer">
        <div id="labels">
          <label>Vento m/s: </label>
          <label>Nuvens:</label>
          <label>Umidade:</label>
          <label>Pressão Atm: </label>
          <label>Nascer do Sol: </label>
          <label>Por do Sol:</label>
          <label>Coordenadas:</label>
        </div>
        <div id="label-data">
          <span>{forecastForecastItem.wind.speed}</span>
          <span>{forecastForecastItem.clouds.all}%</span>
          <span>{forecastForecastItem.main.pressure} hpa</span>
          <span>{forecastForecastItem.main.humidity}</span>
          <span>{getHoursFromTimeStamp(weatherData.city.sunrise)}</span>
          <span>{getHoursFromTimeStamp(weatherData.city.sunset)}</span>
          <span>
            [{weatherData.city.coord.lat}, {weatherData.city.coord.lon}]
          </span>
        </div>
      </div>
    </div>
  );
}
