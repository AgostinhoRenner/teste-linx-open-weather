import { useForm } from "react-hook-form";
import { consultaClimaCidade } from "../../services/openWeather";

export default function SearchBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (cidade: any) => {
    const response = await consultaClimaCidade(cidade);
  };

  return (
    <>
      <div>
        <p>
          Seja Bem Vindo
          <br />
          <strong>Selecione uma Cidade</strong>
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
