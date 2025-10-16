import { useState } from "react";
import "./App.css";

import Container from "./components/container";
import SearchBox from "./components/searchbox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container />
      <SearchBox />
    </>
  );
}

export default App;
