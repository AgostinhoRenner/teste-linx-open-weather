import "./cardDetail.css";
import { connect } from "react-redux";

import { converteKelvinCelsius, montaUrlIcone, getHoursFromTimeStamp, getDateFromTimeStamp } from "../utils";

import type { ForecastItem, WeatherData } from "../../forecast";
import type { RootState } from "../../../../store/reduxStoreTypes";

interface WeatherCardDetailsProps {
  weatherData: WeatherData | null;
  forecastItem: ForecastItem | null;
}

function WeatherCardDetails({ weatherData, forecastItem }: WeatherCardDetailsProps) {
  function cloudiness(volume: number) {
    if (volume < 31) return "Céu Limpo";
    if (volume < 61) return "Parcialmente Nublado";
    if (volume < 81) return "Nublado";
    if (volume < 101) return "Céu Encoberto";
  }

  return (
    <>
      {!!weatherData && !!forecastItem && (
        <div id="card-detail-container">
          <div id="card-detail-header">
            <div id="cidade">{weatherData.city.name}</div>
            <img src={montaUrlIcone(forecastItem.weather[0].icon.replace("n", "d"))} />
          </div>
          <div id="card-detail-body">
            <div id="temperatura">{converteKelvinCelsius(forecastItem.main.temp)}</div>
            <div id="detail-data">
              <div>{cloudiness(forecastItem.clouds.all)}</div>
              <div>{getDateFromTimeStamp(forecastItem.dt)}</div>
            </div>
          </div>
          <div id="card-detail-footer">
            <div id="data-row">
              <div className="label">Vento m/s: </div>
              <div>{forecastItem.wind.speed}</div>
            </div>
            <div id="data-row">
              <div className="label">Nuvens:</div>
              <div>{forecastItem.clouds.all}%</div>
            </div>
            <div id="data-row">
              <div className="label">Pressão Atm: </div>
              <div>{forecastItem.main.pressure} hpa</div>
            </div>
            <div id="data-row">
              <div className="label">Umidade:</div>
              <div>{forecastItem.main.humidity}</div>
            </div>
            <div id="data-row">
              <div className="label">Nascer do Sol: </div>
              <div>{getHoursFromTimeStamp(weatherData.city.sunrise)}</div>
            </div>
            <div id="data-row">
              <div className="label">Por do Sol:</div>
              <div>{getHoursFromTimeStamp(weatherData.city.sunset)}</div>
            </div>
            <div id="data-row">
              <div className="label">Coordenadas:</div>
              <div>
                [{weatherData.city.coord.lat}, {weatherData.city.coord.lon}]
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function mapStateToProps(state: RootState) {
  return { weatherData: state.weather.weatherData, forecastItem: state.forecast.forecastData };
}

export default connect(mapStateToProps)(WeatherCardDetails);
