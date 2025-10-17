import Container from "./components/container";
import Home from "./components/home";
import Forecast from "./components/forecast";
import SearchBox from "./components/searchbox";
import { useState } from "react";

import type { WeatherData } from "./components/forecast/forecast";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  return (
    <>
      <Container>
        <Home />
        <SearchBox setWeatherDataState={setWeatherData} />
        {!!weatherData && <Forecast weatherData={weatherData} />}
      </Container>
    </>
  );
}

export default App;
