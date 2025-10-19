import "./searchbox.css";

import { useForm } from "react-hook-form";
import { consultaClimaCidade } from "../../services/openWeather";
import { connect } from "react-redux";

import { atualizarWeatherData } from "../../store/actions/weatherActions";

interface SearchBoxProps {
  setWeatherDataRedux: (data: any) => void;
}

function SearchBox({  setWeatherDataRedux }: SearchBoxProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (cidade: any) => {
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
      <div id="search-box">
        <input id="cidade" placeholder="Pesquise por uma cidade" {...register("cidade", { required: true })} />
        <button onClick={() => handleSubmit(onSubmit)()}>
          <span className="fa fa-search"></span>
        </button>
      </div>
      {errors?.cidade?.type === "required" && <p className="error-message">Cidade precisa ser informada.</p>}
    </div>
  );
}

function mapStateToProps(state) {
  return { weatherData: state.weather.weatherData };
}

function mapDispatchToProps(dispatch) {
  return {
    setWeatherDataRedux(weatherData) {
      const action = atualizarWeatherData(weatherData);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
