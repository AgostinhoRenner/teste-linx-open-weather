import "./searchbox.css";

import { useForm } from "react-hook-form";
import { consultaClimaCidade } from "../../services/openWeather";
import { connect } from "react-redux";

import { atualizarWeatherData } from "../../store/actions/weatherActions";

import type { FieldValues } from "react-hook-form";
import type { DispatchType, RootState } from "../../store/reduxStoreTypes";
import type { WeatherData } from "../forecast/forecast";

interface SearchBoxProps {
  setWeatherDataRedux: (data: WeatherData) => void;
}

function SearchBox({ setWeatherDataRedux }: SearchBoxProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (cidade: { cidade: string } | FieldValues) => {
    try {
      const response = await consultaClimaCidade(cidade);
      if (typeof response != "string") setWeatherDataRedux(response);
      else alert(response);
    } catch (error) {
      console.log(error); // Registra na ferramenta de log
      alert("Ocorreu um problema com a requisição, verifique os logs");
    }
  };

  return (
    <div id="search-box-container">
      <div id="search-box-header">
        Seja Bem Vindo
        <br />
        <strong>Pesquise sua Cidade</strong>
      </div>
      <div id="search-box" className={errors?.cidade?.type === "required" ? "error-message" : ""}>
        <input
          id="cidade"
          placeholder={errors?.cidade?.type === "required" ? "Cidade Precisa ser informada" : "Pesquise por uma cidade"}
          {...register("cidade", { required: true })}
        />
        <button onClick={() => handleSubmit(onSubmit)()}>
          <span className="fa fa-search"></span>
        </button>
      </div>
      {errors?.cidade?.type === "required"}
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return { weatherData: state.weather.weatherData };
}

function mapDispatchToProps(dispatch: DispatchType) {
  return {
    setWeatherDataRedux(weatherData: WeatherData) {
      const action = atualizarWeatherData(weatherData);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
