import styled from "styled-components";
import bgMobile from "../../assets/bg-intro-mobile.svg";
import bg from "../../assets/bg-intro-desktop.svg";

const Header = styled.header`
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0, 0, 0, rgba(0, 0, 0, 100);

  .header__list {
    width: 100%;
    max-width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: 100%;

    .header__li {
      list-style: none;
      height: 100%;
      flex: 1;
      cursor: pointer;
      color: hsl(233, 8%, 62%);
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        border: none;
        border-bottom: 2px solid;
        border-image: linear-gradient(
            to right,
            hsl(136, 65%, 51%),
            hsl(192, 70%, 51%)
          )
          1;
        transition: 0.3s ease;
      }
    }
  }
  //########################################

  @media (min-width: 597px) {
    .header__toggle {
      display: none;
    }
  }
  @media (max-width: 596px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;
    gap: 130px;
    button {
      display: none;
    }
    .header__list {
      display: ${(props) => (props.toggle ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      z-index: 2;
      width: 100%;
      padding: 5px;
      max-width: 350px;
      height: 400px;
      align-items: center;
      justify-content: space-around;
      gap: 5px;
      top: 110px;
      bottom: 23px;
      border-radius: 8px;
      box-shadow: 0, 0, 0, rgba(0, 0, 0, 100);
      background: hsl(0, 0%, 100%);

      .header__li {
        color: hsl(233, 26%, 24%);
      }
    }

    .header__toggle {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;

      .header__btn__toggle {
        width: 25px;
        height: 2px;
        padding: 1px;
        background: #000;

        border-radius: 10px;
        position: relative;
        animation: ${(props) =>
          props.toggle ? ".1s linear .1s both animationToggleBefore" : "block"};

        ::before {
          content: "";
          width: 25px;
          height: 2px;
          border-radius: 10px;
          position: absolute;
          background: ${(props) => (props.toggle ? "transparent" : "#000")};
          inset: -8px 0px 0px 0px;
        }
        ::after {
          content: "";
          width: 25px;
          height: 2px;
          animation: ${(props) =>
            props.toggle ? ".1s linear .1s both animationToggleAfter" : "none"};
          border-radius: 10px;
          position: absolute;
          background: #000;
          inset: 8px 0px 0px 0px;
        }
      }
    }
  }

  /* ###########################################*/

  @keyframes animationToggleBefore {
    100% {
      transform: rotate(140deg);
    }
  }
  @keyframes animationToggleAfter {
    100% {
      transform: rotate(-270deg);
      inset: 0;
    }
  }
`;

const Main = styled.main`
  width: 100%;
  background: hsl(0, 0%, 100%);
  display: grid;
  position: relative;
  margin-bottom: 50px;
  @media (min-width: 597px) {
    .main__container__one {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .main__title_one {
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: start;
        max-height: 600px;
        height: 100%;
        gap: 30px;
        width: 100%;
        max-width: 500px;
        padding: 2rem 1rem;

        h1,
        p {
          text-align: left;
          width: 100%;
        }
        h1 {
          font-weight: 400;
          font-size: 2.1rem;
        }
      }
      .main__section__mockup {
        background: url(${bg});
        background-position: -10vh -47vh;
        background-repeat: no-repeat;

        overflow: hidden;

        .main__img_phone {
          width: 100%;
          max-width: 1000px;
          height: 100%;
          max-height: 1200px;
          object-fit: cover;
          transform: translate(21vh, -22vh);
        }
      }
    }
    .main__container__two {
      display: grid;
      align-items: center;
      grid-gap: 20px;
      background: hsl(220, 16%, 96%);
      margin-bottom: 20px;
      padding: 2rem 1rem;

      .main__title__two {
        display: grid;
        place-items: left;
        grid-gap: 20px;
        padding: 10px;

        h2 {
          font-size: 1.5rem;
          font-weight: 400;
        }
      }
      .main__cards {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0px;
        gap: 20px;

        .main__container__two__cards {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          gap: 30px;
          margin-bottom: 15px;
          width: 100%;
          max-width: 256px;
          height: 100%;
          min-height: 300px;

          h3 {
            font-size: 1.1rem;
            font-weight: 400;
            width: 100%;
            text-align: left;
          }

          p {
            font-size: clamp(1rem, 1rem, 0.9rem);
            text-align: left;
            width: 100%;
            max-width: 400px;
            overflow: hidden;
          }
        }
      }
    }

    .main__container__three {
      display: grid;
      justify-content: space-between;
      align-items: center;
      background: hsl(0, 0%, 98%);

      h3 {
        font-size: 1.5rem;
        font-weight: 400;
      }

      .main__cards {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        padding: 2rem 1rem;

        .main__container__three__cards {
          width: 100%;
          max-width: 300px;
          display: flex;
          height: 100%;
          min-height: 320px;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          background: hsl(0, 0%, 100%);
          box-shadow: 0, 0, 0, rgba(0, 0, 0, 0.65);
          border-radius: 10px;
          padding: 1rem 0;

          img {
            width: 100%;
            height: 100%;
            max-height: 140px;
            max-height: 180px;
            object-fit: cover;
            border-radius: 6px 6px 0px 0px;
          }
          small {
            width: 90%;
            text-align: left;
          }
          h3 {
            font-size: 1.2rem;
            width: 90%;
            text-align: left;
            cursor: pointer;

            :hover {
              transition: 0.4s ease;
              color: hsl(136, 65%, 51%);
            }
          }

          p {
            font-size: clamp(0.9rem, 1rem, 0.9rem);
            text-align: left;
            width: 100%;
            overflow: hidden;
            padding: 5px 20px;
          }
        }
      }
    }
    //####################################

    .main__mask {
      display: none;
    }
  }
  @media (max-width: 596px) {
    .main__mask {
      position: absolute;
      inset: 0;
      z-index: 1;
      height: 100%;
      min-height: 100vw;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.25),
        transparent
      );
      display: ${(props) => (props.toggle ? "block" : "none")};
    }
  }
  @media (max-width: 630px) {
    margin-bottom: 40px;
    .main__container__one {
      display: flex;
      flex-direction: column-reverse;
      height: 100%;
      width: 100%;

      .main__title_one {
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        justify-content: center;
        height: 100%;
        max-height: 35vh;
        width: 100%;
        max-width: 400px;
        padding: 2.1rem 2rem;

        h1 {
          color: hsl(233, 26%, 24%);
          text-align: center;
          font-weight: 400;
          font-size: 2.2rem;
        }
        p {
          color: hsl(233, 8%, 62%);
          text-align: center;
          font-size: clamp(0.9rem, 1vw, 0.9rem);
          word-wrap: wrap;
          text-overflow: ellipsis;
          width: 90%;
        }
      }
      .main__section__mockup {
        background: url(${bgMobile});
        background-position: 0vh -19.4vh;
        background-repeat: no-repeat;
        background-size: 450px 650px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        .main__img_phone {
          width: 100%;
          max-width: 350px;
          height: 100%;
          max-height: 750px;
          transform: translate(0vh, -15vh);
        }
      }
    }

    .main__container__two {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 2.1rem 2rem;

      .main__title__two {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 30px;
        margin-top: 100px;

        h2 {
          font-size: 1.8rem;
          font-weight: 400;
          width: 60%;
          text-align: center;
        }

        p {
          font-size: clamp(0.7rem, 1rem, 0.9rem);
          text-align: center;
          width: 90%;
          max-width: 400px;
          overflow: hidden;

          padding: 5px 20px;
        }
      }
      .main__cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 3px;
        height: 90%;
        flex: 1;
      }
      .main__container__two__cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        margin-bottom: 15px;

        h3 {
          font-size: 1.1rem;
          font-weight: 400;
          width: 60%;
          text-align: center;
        }

        p {
          font-size: clamp(0.7rem, 1rem, 0.9rem);
          text-align: center;
          width: 90%;
          max-width: 400px;
          overflow: hidden;

          padding: 5px 20px;
        }
      }
    }

    .main__container__three {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      background: hsl(220, 16%, 96%);

      h3 {
        font-size: 1.8rem;
        font-weight: 400;
        text-align: center;
      }

      .main__cards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 30px;
        margin-top: 100px;
        .main__container__three__cards {
          width: 100%;
          max-width: 300px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          background: hsl(0, 0%, 100%);
          box-shadow: 0, 0, 0, rgba(0, 0, 0, 0.65);
          border-radius: 10px;

          img {
            width: 100%;
            height: 100%;
            max-height: 180px;
            object-fit: cover;
            border-radius: 6px 6px 0px 0px;
          }
          small {
            width: 90%;
            text-align: left;
          }
          h3 {
            font-size: 1.8rem;
            width: 90%;
            text-align: left;
          }

          p {
            font-size: clamp(0.7rem, 1rem, 0.9rem);
            text-align: left;
            width: 100%;

            overflow: hidden;

            padding: 5px 20px;
          }
        }
      }
    }
  }
`;

const Footer = styled.footer`
  width: 100%;
  background: hsl(233, 26%, 24%);
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem 10px;
  margin-bottom: 15px;

  .footer__social__networks {
    display: grid;
    place-items: initial;
    width: 100%;
    max-width: 250px;
    gap: 20px;
    height: 100%;
    padding: 1rem;
    margin-right: 50px;
    margin-left: 15px;
    > img {
      filter: contrast(300%) brightness(2000%) saturate(200%) sepia(0%)
        invert(40%) grayscale(0%);
    }
    .footer__networks {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 15px;
      width: 100%;
      max-width: 150px;
      cursor: pointer;

      :hover {
        transition: 0.4s ease;
        color: hsl(136, 65%, 51%);
      }
    }
  }

  .footer__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 5;
    grid-gap: 0 2rem;
    place-items: initial;
    width: 100%;
    max-width: 400px;
    height: 100%;
    margin-bottom: 10px;
    li {
      width: 100%;
      text-align: left;
      color: hsl(220, 16%, 96%);
      margin: 10px 0px 10px 0px;
      cursor: pointer;

      :hover {
        transition: 0.4s ease;
        color: hsl(136, 65%, 51%);
      }
    }

    .item1 {
      grid-column: 1/1;
    }
    .item2 {
      grid-column: 1/1;
      grid-row: 2/2;
    }
    .item5 {
      grid-column: 2/2;
      grid-row: 2/2;
    }
    .item3 {
      grid-column: 1/1;
      grid-row: 3/3;
    }
  }

  .footer__rights__reserved {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    height: 100%;
    gap: 20px;

    small {
      display: flex;

      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }

  //##################################

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 1rem;
    height: 100%;
    min-height: 500px;

    .footer__social__networks {
      display: grid;
      place-items: center;
      width: 100%;
      gap: 20px;
      height: 100%;

      > img {
        filter: contrast(300%) brightness(2000%) saturate(200%) sepia(0%)
          invert(40%) grayscale(0%);
      }
      .footer__networks {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
      }
    }

    .footer__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      gap: 20px;
      margin-bottom: 10px;
      li {
        width: 100%;
        text-align: center;
        color: hsl(220, 16%, 96%);
      }
    }

    .footer__rights__reserved {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      gap: 20px;

      small {
        display: flex;

        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    }
  }
`;

export { Main, Footer, Header };
