import styled from "styled-components";
import mockups from "../../assets/bg-intro-desktop.svg";

export const Wrapper = styled.section`
  :root {
    --Dark-Blue: hsl(233, 26%, 24%);
    --Lime-Green: hsl(136, 65%, 51%);
    --Bright-Cyan: hsl(192, 70%, 51%);

    --Grayish-Blue: hsl(233, 8%, 62%);
    --Light-Grayish-Blue: hsl(220, 16%, 96%);
    --Very-Light-Gray: hsl(0, 0%, 98%);
    --White: hsl(0, 0%, 100%);
  }

  width: 100%;
  max-width: 1440px;
  height: 100vh;
  background: hsl(220, 16%, 96%);
  overflow-y: scroll;

  header {
    background: hsl(0, 0%, 100%);
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.55);
    height: 65px;

    .toggle {
      display: none;
    }

    ul {
      width: 100%;
      max-width: 520px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      height: 100%;

      li {
        list-style: none;
        color: hsl(233, 8%, 62%);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex: 1;
        text-align: center;

        :hover {
          animation: 0.4s linear 0.4s both animaLi;
        }

        @keyframes animaLi {
          100% {
            border: none;
            border-bottom: 2px solid;

            border-image: linear-gradient(
                to right,
                hsl(136, 65%, 51%),
                hsl(192, 70%, 51%)
              )
              1;
          }
        }
      }
    }
  }
  main {
    section:nth-child(1) {
      background: hsl(0, 0%, 98%);

      .mockup {
        background-image: url(${mockups});
      }
    }

    .cards-two {
      div {
        background: hsl(0, 0%, 98%);
      }
    }
  }

  footer {
    background: hsl(233, 26%, 24%);
  }
  @media (min-width: 597px) {
    header {
      #container-toggle {
        display: none;
      }
    }
  }
  @media (max-width: 596px) {
    button {
      display: none;
    }

    main {
      position: relative;
      #masck {
        position: absolute;

        inset: 0;

        background: linear-gradient(
          ${(props) =>
            props.isToggle
              ? "to bottom,rgba(0, 0, 0, 0.55),rgba(100, 100, 100, 0.25),rgba(200, 200, 200, 0.25));"
              : "none"}
        );
      }
    }

    header {
      position: relative;
      justify-content: space-between;
      padding: 10px;
      align-items: center;

      #container-toggle {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        #toggle {
          width: 25px;
          background: #000;
          height: 3px;
          position: relative;

          margin-right: 4px;
          border-radius: 8px;
          animation: ${(props) =>
            props.isToggle ? ".2s linear .2s both animaToggle" : "none"};
        }
        #toggle::before {
          width: 25px;
          background: #000;
          inset: -8px 0px 0px 0px;
          content: "";
          height: 3px;
          border-radius: 8px;
          position: absolute;
          animation: ${(props) =>
            props.isToggle ? ".2s linear .2s both animaToggleBefore" : "none"};
        }

        #toggle::after {
          width: 25px;
          position: absolute;
          background: #000;
          inset: 8px 0px 0px 0px;
          content: "";
          border-radius: 8px;
          height: 3px;
          animation: ${(props) =>
            props.isToggle ? ".2s linear .2s both animaToggleAfter" : "none"};
        }
      }

      ul {
        display: ${(props) => (props.isToggle ? "flex" : "none")};
        position: absolute;
        flex-direction: column;
        z-index: 1;
        max-width: 300px;
        width: 100%;
        padding: 3px;
        justify-content: center;
        align-items: center;
        gap: 13px;
        background: hsl(0, 0%, 100%);
        box-shadow: 0, 0, 20px, black;
        inset: 80px 50px 50px 60px;
        height: 100%;
        min-height: 300px;
        border-radius: 8px;

        li {
          color: hsl(233, 26%, 24%);
        }
      }
    }

    @keyframes animaToggleBefore {
      100% {
        inset: 0px 0px 0px 0px;
      }
    }
    @keyframes animaToggleAfter {
      100% {
        transform: rotate(-90deg) translate(8px, 0px);
      }
    }
    @keyframes animaToggle {
      100% {
        transform: rotate(50deg) translateY(-4px);
      }
    }
  }
`;
