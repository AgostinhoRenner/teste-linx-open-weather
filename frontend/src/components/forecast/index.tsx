import "./forecast.css";
import { useState } from "react";

import WeatherCards from "./componentes/weatherCards";
import WeatherCardDetails from "./componentes/weatherCardDetails";
import type { ForecastItem, WeatherInfo } from "./forecast";

const diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"]

export default function Forecast() {
  const [forecastData, setForecastData] = useState<ForecastItem[]>([]);

  return (
    <>
      <div id="forecast">
        {forecastData.length > 0 ? (
          <div>
            {forecastData.map((data) => (
              <WeatherCards
                key={data.dt}
                codigoIcone={data.weather[0].icon}
                diaSemana={diasDaSemana[new Date(data.dt).getDay()]}
                tempKelvin={data.main.temp}
                velocidadeVento={data.wind.speed}
                nuvens={data.clouds.all}
              />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <WeatherCardDetails />
      </div>
    </>
  );
}
