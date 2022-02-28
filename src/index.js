import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyled } from "./global.styled";
import Context from "./context/app.context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
