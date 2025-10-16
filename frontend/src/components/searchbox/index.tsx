import React, { useState } from "react";
import consultaClimaCidade from "../../services/openWeather";

export default function SearchBox() {

  const [cidade, setCidade] = useState('');

  return (
    <>
      <div className="search-box">
        <form action="submit" method="post">
          <input
            name="Cidade"
            id="cidade"
            placeholder="Pesquise por uma cidade"
            value={cidade}
            onInput={ e => setCidade(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}
