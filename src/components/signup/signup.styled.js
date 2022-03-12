import styled from "styled-components";
import bank from "../../assets/bg-intro-mobile.svg";

export const Wrapper = styled.section`
  width: 800px;
  height: 500px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0, 0, 10px, rgba(300, 300, 300, 0.77);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background-color: #f3f3f3;
  gap: 20px;
  margin: 0 auto;
  margin-top: 80px;
  background-image: url(${bank});
  background-position: right right;
  background-repeat: no-repeat;
  background-size: 800px;
  position: relative;

  h1 {
    text-transform: capitalize;
    color: #f5f5f5;
    margin-bottom: 2px;
    font-size: clamp(2rem, 2.1rem, 2rem);
  }

  small {
    color: hsl(136, 65%, 51%);
    font-size: 1rem;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    height: 70%;
    width: 100%;
    max-width: 350px;

    label {
      font-size: 0.7rem;
    }

    .isEmail {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      width: 80%;

      label {
        width: 1px;
        text-align: left;
        color: #e7e6d3;
      }

      input {
        width: 100%;
        padding: 5px;
        border: none;
        border-bottom: 2px solid;
        border-image: linear-gradient(
            to right,
            hsl(136, 65%, 51%),
            hsl(192, 70%, 51%)
          ),
          1;
        background: transparent;
        color: hsl(192, 70%, 51%);
        outline: none;
      }
    }

    .isPassword {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      width: 80%;

      label {
        width: 1px;
        text-align: left;
        color: #e7e6d3;
      }

      input {
        width: 100%;
        padding: 5px;
        border: none;
        border-bottom: 2px solid;
        border-image: linear-gradient(
            to right,
            hsl(136, 65%, 51%),
            hsl(192, 70%, 51%)
          )
          1;
        background: transparent;
        color: hsl(192, 70%, 51%);
        outline: none;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border-radius: 12px;
      background: #2a2a2a;
      box-shadow: 0, 0, 5px, rgba(0, 0, 0, 100);
      outline: none;
      cursor: ${(props) => (props.isDisabled ? "none" : "pointer")};
      pointer-events: ${(props) => props.isDisabled && "none"};
      border: none;

      :hover {
        opacity: 0.8;
        transition: 0.4s ease;
      }

      .BsArrowRightShort {
        width: 20px;
        height: 20px;
        color: #f3f3f3;
      }
    }
  }

  small:last-child {
    display: flex;
    align-items: center;
    gap: 3px;
    position: absolute;
    bottom: 1px;
    left: 10px;
    color: #2a2a2a;

    span {
      color: orangered;
      cursor: pointer;
    }
  }
`;
