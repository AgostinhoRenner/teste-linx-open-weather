import { useEffect, useState } from "react";
import "./weatherCards.css";

export default function WeatherCards({
  codigoIcone,
  diaSemana,
  tempKelvin,
  velocidadeVento,
  nuvens,
}: {
  codigoIcone: string;
  diaSemana: string;
  tempKelvin: number;
  velocidadeVento: number;
  nuvens: number;
}) {
  const [icone, setIcone] = useState("");
  const [temperatura, setTemperatura] = useState("");

  function montaUrlIcone(codigoIcone: string) {
    let iconUrl: string = import.meta.env.VITE_ICON_URL;
    return iconUrl.concat("", codigoIcone, ".png");
  }

  function converteKelvinCelsius(temperaturaKelvin: number) {
    const celsius = temperaturaKelvin - 273.15;
    return `${celsius.toFixed(2)}°`;
  }

  useEffect(() => {
    let iconUrl = "";
    let tempCelsius = "";
    if (codigoIcone) iconUrl = montaUrlIcone(codigoIcone);
    if (tempKelvin) tempCelsius = converteKelvinCelsius(tempKelvin);

    setIcone(iconUrl);
    setTemperatura(tempCelsius);
  }, []);
  return (
    <div className="card-container">
      <div className="card-header">
        {!!icone && <img src={icone} />}
        <div>{diaSemana}</div>
      </div>
      <div className="card-body">{temperatura}</div>
      <div className="card-footer">
        <div>{velocidadeVento}</div>
        {!!nuvens && <div>Nublado: {nuvens}%</div>}
      </div>
    </div>
  );
}
