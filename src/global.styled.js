import { createGlobalStyle } from "styled-components";
import background from "./assets/background.png";

export const GlobalStyled = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Public Sans', sans-serif;
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
  padding: 0 2rem;
  overflow-y : scroll;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-between;
  }

  h1,h2,h3{
    color: hsl(233, 26%, 24%);
    
  }
  p,small{
    color: hsl(233, 8%, 62%);
  }
  li{
  list-style:none;
  }
`;
