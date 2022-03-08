import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  background: linear-gradient(hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  outline: none;
  border: none;
  padding: 13px;
  border-radius: 20px;
  max-width: 140px;
  width: 100%;
  font-weight: 700;
  text-transform: capitalize;
  box-shadow: 0, 0, 7px,
    linear-gradient(180deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  cursor: pointer;
  color: hsl(220, 16%, 96%);

  :hover {
    transition: 0.3s ease;
    opacity: 0.7;
  }
`;
