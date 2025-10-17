import "./forecast.css";
import { useEffect, useState } from "react";

import WeatherCard from "./componentes/weatherCard";
import WeatherCardDetails from "./componentes/weatherCardDetails";

import type { WeatherData, ForecastItem } from "./forecast";

export default function Forecast({ weatherData }: { weatherData: WeatherData | undefined }) {
  const [forecastData, setForecastData] = useState<ForecastItem[]>([]);
  const [selectedCard, setSelectedCard] = useState<ForecastItem>();

  const handleCardClick = (item: ForecastItem) => {
    setSelectedCard(item);
  };

  useEffect(() => {
    if (weatherData) {
      setForecastData(weatherData.list);
      setSelectedCard(weatherData.list[0]);
    }
  }, [weatherData]);

  return (
    <>
      <div id="forecast">
        {forecastData.length > 0 ? (
          <>
            {forecastData.map((data) => (
              <WeatherCard
                key={data.dt}
                data={data}
                onCardClick={handleCardClick}
                isSelected={selectedCard?.dt === data.dt}
              />
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        {!!weatherData && selectedCard && (
          <WeatherCardDetails weatherData={weatherData} forecastForecastItem={selectedCard} />
        )}
      </div>
    </>
  );
}
