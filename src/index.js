import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import { font } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/free-solid-svg-icons";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
