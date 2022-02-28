import styled from "styled-components";
import backImg from "../../assets/back-container-img.jpg";

export const Wrapper = styled.section`
  :root {
    --blue-800: #12192e;
    --blue-700: #111c37;
    --blue-600: #182341;
    --blue-500: #1a2545;
    --green-600: #00a86b;
    --white-800: #faebd7;
  }

  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 600px;
  height: 100%;
  min-height: 400px;
  background: var(--white-800);
  border-bottom: 2px solid var(--green-600);

  .img-container {
    background-image: url(${backImg});
    width: 100%;
    max-width: 300px;
    height: 100%;
    min-height: 400px;
    object-fit: cover;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .form-container {
    flex: 1;
    background: var(--white-800);
    height: 100%;
    min-height: 400px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    span {
      width: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        text-transform: capitalize;
        width: 100%;
        text-align: left;
        padding: 10px;
      }
      .IoMdReturnLeft {
        width: 24px;
        height: 24px;
        cursor: pointer;
        margin-right: 5px;

        :hover {
          opacity: 0.7;
          transition: 0.3s ease;
        }
      }
    }

    form {
      padding: 10px;
      height: 100%;
      width: 100%;
      max-width: 300px;
      align-items: center;
      justify-content: space-around;
      display: flex;
      flex-direction: column;
      gap: 20px;

      input {
        background: transparent;
      }

      span:nth-child(1) {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;

        label {
          position: absolute;
          bottom: 15px;
          font-size: 0.9rem;
          text-transform: capitalize;
          text-align: right;
          right: 7px;
          color: var(--blue-800);
          width: 100%;

          animation: ${(props) =>
            props.isLetterEmail && ".4s linear .4s both animaLabelTop"};

          @keyframes animaLabelTop {
            100% {
              transform: translateY(-22px);
            }
          }
        }

        input {
          padding: 10px;
          width: 100%;
          color: var(--green-600);
          display: inline-block;
          outline: none;
          font-size: 0.9rem;
          font-weight: 500;
          border: 0;
          border-bottom: 1px solid #5b6377;
          background-color: transparent;
        }
      }

      span:nth-child(2) {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;

        label {
          position: absolute;
          bottom: 15px;
          font-size: 0.9rem;
          text-transform: capitalize;
          text-align: right;
          right: 7px;
          color: var(--blue-800);
          width: 100%;

          animation: ${(props) =>
            props.isLetterPassword && ".4s linear .4s both animaLabelTop"};

          @keyframes animaLabelTop {
            100% {
              transform: translateY(-22px);
            }
          }
        }

        input {
          padding: 10px;
          width: 100%;
          color: var(--green-600);
          display: inline-block;
          outline: none;
          font-size: 0.9rem;
          font-weight: 500;
          border: 0;
          border-bottom: 1px solid #5b6377;
          background-color: transparent;
        }
      }

      button {
        padding: 10px;
        width: 100%;
        border-radius: 10px;
        font-weight: bold;
        letter-spacing: 1px;
        color: var(--green-600);
        background: var(--blue-800);
        border-color: var(--blue-700);
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        :hover {
          opacity: 0.7;
          transition: 0.4s ease;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    max-width: 400px;
    width: 100%;
    height: 100%;
    min-height: 700px;

    .img-container {
      display: none;
    }

    .form-container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 700px;
      max-width: 400px;

      h1 {
        text-align: left;
        padding: 5px;
        width: 100%;
      }

      form {
        width: 100%;
        max-width: 400px;
        height: 100%;
        min-height: 450px;
      }
    }
  }
`;
