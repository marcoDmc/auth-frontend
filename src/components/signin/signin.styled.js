import styled from "styled-components";

export const Wrapper = styled.div``;

export const Section = styled.section`
  width:350px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 10px;
  background: hsl(0, 0%, 100%);
  box-shadow: 0, 0, 5px, hsl(233, 26%, 24%);
  margin: 0 auto;
  margin-top: 100px;
  min-height: 450px;
  border-radius: 8px;

  img{
    width:120px;
  }

  h1 {
    color: hsl(233, 26%, 24%);
  }

  p {
    font-size: clamp(0.9rem, 1rem, 0.9rem);
  }

  form {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 30px;
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      gap: 10px;
    }
    input {
      width: 100%;
      padding: 5px;
      text-align: left;
      background: transparent;
      border: none;
      border-bottom: 2px solid;
      border-image: linear-gradient(
          to right,
          hsl(136, 65%, 51%),
          hsl(192, 70%, 51%),
          hsl(233, 26%, 24%)
        )
        1;
      outline: none;
      color: #2a2a2a;
    }

    > a {
      text-decoration: none;
      color: hsl(233, 26%, 24%);
      font-size: 0.7rem;
      width: 100%;
      text-align: right;
      cursor: pointer;
      position: absolute;
      top: 50%;

      :hover {
        opacity: 0.8;
        transition: 0.4s ease;
      }
    }

    button {
      width: 90%;
      padding: 5px;
      border-color: hsl(136, 65%, 51%);
      border-radius: 10px;
      color: #2a2a2a;
      margin-top: 20px;
      pointer-events: ${(props) => props.isDisabled && "none"};
      background: linear-gradient(
        to left,
        hsl(136, 65%, 51%),
        hsl(192, 70%, 51%)
      );
      cursor: ${(props) => (props.isDisabled ? "none" : "pointer")};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      margin-top: 20px;
      gap: 5px;
      white-space: nowrap;
      width:90%;

      p {
        text-decoration: none;
        color: orangered;
        font-size: 0.7rem;
        cursor: pointer;
      }
    }
  }
`;
