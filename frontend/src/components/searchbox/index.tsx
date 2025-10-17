import "./searchbox.css";

import { useForm } from "react-hook-form";
import { consultaClimaCidade } from "../../services/openWeather";

interface SearchBoxProps {
  setWeatherDataState: (data: any) => void;
}

export default function SearchBox({ setWeatherDataState }: SearchBoxProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (cidade: any) => {
    try {
      const response = await consultaClimaCidade(cidade);
      setWeatherDataState(response);
    } catch (error) {
      console.log(error); // Registra na ferramenta de log
      alert("Ocorreu um problema com a requisição, verifique os logs");
    }
  };

  return (
    <>
      <div>
        <p>
          Seja Bem Vindo
          <br />
          <strong>Pesquise sua Cidade</strong>
        </p>
        <div className="search-box">
          <input id="cidade" placeholder="Pesquise por uma cidade" {...register("cidade", { required: true })} />
          {errors?.cidade?.type === "required" && <p className="error-message">Cidade precisa ser informada.</p>}
          <button onClick={() => handleSubmit(onSubmit)()}>
            <span className="fa fa-search"></span>
          </button>
        </div>
      </div>
    </>
  );
}
