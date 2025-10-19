import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { Provider } from "react-redux";
import configStore from "./store/weatherDataStore.ts";

const weatherStore = configStore();

createRoot(document.getElementById("root")!).render(
  <Provider store={weatherStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
