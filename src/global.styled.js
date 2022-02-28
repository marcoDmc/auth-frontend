import { createGlobalStyle } from "styled-components";
import background from "./assets/background.png";

export const GlobalStyled = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

:root {
  --blue-800: #12192E;
  --blue-700: #111C37;
  --blue-600: #182341;
  --blue-500: #1A2545;
  --green-600: #00A86B;
  --white-800: #FAEBD7;
}


  body {
  background-color: var(--blue-700);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow-y : hidden;
  }
`;
