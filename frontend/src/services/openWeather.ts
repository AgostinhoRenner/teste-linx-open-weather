import axios from "axios";
const apiBaseUrl: string = import.meta.env.VITE_API_URL;

export async function consultaClimaCidade(cidade : JSON) {
  const endpoint = "/weather";
  return axios.post(apiBaseUrl + endpoint, cidade);
}
