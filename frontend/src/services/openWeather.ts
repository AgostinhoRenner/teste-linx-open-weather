import axios from "axios";
const apiBaseUrl: string = import.meta.env.VITE_API_URL;

export async function consultaClimaCidade(cidade: JSON) {
  const endpoint = "/weather";
  const response = await axios.post(apiBaseUrl + endpoint, cidade);
  if( response.status > 400) throw new Error("Ocorreu um problema com a requisição");
  return response.data;
}
