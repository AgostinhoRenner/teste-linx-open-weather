import Container from "./components/container";
import Home from "./components/home";
import Forecast from "./components/forecast";
import SearchBox from "./components/searchbox";

function App() {
  return (
    <>
      <Container>
        <Home />
        <SearchBox />
        <Forecast />
      </Container>
    </>
  );
}

export default App;
