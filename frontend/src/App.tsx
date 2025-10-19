import { Container, Column, Row } from "./components/container";
import Home from "./components/home";
import SearchBox from "./components/searchbox";
import Forecast from "./components/forecast";
import WeatherCardDetails from "./components/forecast/componentes/weatherCardDetails";

function App() {
  return (
    <>
      <Container>
        <Column>
          <Home />
        </Column>
        <Column>
          <Row>
            <SearchBox />
          </Row>
          <Row>
            <Forecast />
          </Row>
        </Column>
        <Column>
          <WeatherCardDetails />
        </Column>
      </Container>
    </>
  );
}

export default App;
