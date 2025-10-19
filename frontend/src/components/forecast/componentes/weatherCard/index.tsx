import "./weatherCard.css";
import { useEffect, useState } from "react";

import { converteKelvinCelsius, montaUrlIcone } from "../utils";

import type { ForecastItem } from "../../forecast";

interface WeatherCardProps {
  data: ForecastItem;
  onCardClick: (item: ForecastItem) => void;
  isSelected: boolean;
}

export default function WeatherCard({ data, onCardClick, isSelected }: WeatherCardProps) {
  const [icone, setIcone] = useState("");
  const [temperatura, setTemperatura] = useState("");

  const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  useEffect(() => {
    if (data) {
      let iconUrl = montaUrlIcone(data.weather[0].icon.replace("n", "d"));
      let tempCelsius = converteKelvinCelsius(data.main.temp);
      setIcone(iconUrl);
      setTemperatura(tempCelsius);
    }
  }, [data]);

  return (
    <div className={`card-container ${isSelected ? "selected" : ""}`}>
      <div
        onClick={() => onCardClick(data)} // <--- Adiciona o manipulador de clique
      >
        <div className="card-header">
          {!!icone && <img src={icone} />}
          <div>{diasDaSemana[new Date(data.dt * 1000).getDay()]}</div>
        </div>
        <div className="card-body">{temperatura}</div>
        <div className="card-footer">
          <div>Vento m/s {data.wind.speed.toString().replace(".", ",")} </div>
          <div>Nuvens: {data.clouds.all.toString()}%</div>
        </div>
      </div>
    </div>
  );
}
