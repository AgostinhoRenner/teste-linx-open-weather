import "./forecast.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import WeatherCard from "./componentes/weatherCard";

import { atualizarForecastData } from "../../store/actions/weatherActions";

import type { WeatherData, ForecastItem } from "./forecast";
import type { DispatchType, RootState } from "../../store/reduxStoreTypes";

interface ForecastProps {
  weatherData: WeatherData | null;
  setForecastItemRedux: (data: any) => void;
}

function Forecast({ weatherData, setForecastItemRedux }: ForecastProps) {
  const [forecastData, setForecastData] = useState<ForecastItem[] | null>([]);
  const [selectedCard, setSelectedCard] = useState<ForecastItem>();

  const handleCardClick = (item: ForecastItem) => {
    setForecastItemRedux(item);
    setSelectedCard(item);
  };

  useEffect(() => {
    if (weatherData) {
      setForecastData(weatherData.list);
      setSelectedCard(weatherData.list[0]);
      setForecastItemRedux(weatherData.list[0]);
    } else {
      setForecastData(null);
    }
  }, [weatherData]);

  return (
    <>
      <div id="forecast">
        {!!forecastData && forecastData.length > 0 ? (
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
    </>
  );
}

function mapStateToProps(state: RootState) {
  return { weatherData: state.weather.weatherData };
}

function mapDispatchToProps(dispatch: DispatchType) {
  return {
    setForecastItemRedux(forecastItem: ForecastItem) {
      const action = atualizarForecastData(forecastItem);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
