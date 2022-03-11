import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Public Sans', sans-serif;
 
}


  body {
  padding: 0 2rem;
  overflow-y : scroll;
  display:flex;
  flex-direction:column;
  align-items:center;
  background: hsl(233, 26%, 24%);
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
