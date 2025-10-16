import axios from "axios"

export default function consultaClimaCidade(cidade:string){
    axios.post("http://127.0.0.1:5000/weather", cidade);
}