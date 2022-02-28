import styled from "styled-components";

export const Wrapper = styled.div`
  :root {
    --blue-800: #12192e;
    --blue-700: #111c37;
    --blue-600: #182341;
    --blue-500: #1a2545;
    --green-600: #00a86b;
    --white-800: #faebd7;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow-y: hidden;
  padding: 2em 5rem;

  a {
    text-decoration: none;
  }

  .card {
    background: linear-gradient(
      180deg,
      var(--blue-500) 0%,
      var(--blue-800) 100%
    );
    padding: 2.25rem;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid var(--green-600);
    height: 100%;
    max-height: 600px;
    margin-top: 1px;
  }

  .logo {
    text-align: center;
    margin-top: 2.25rem;
    margin-bottom: 7rem;
  }

  .label-float {
    input {
      width: 100%;
      padding: 5px 5px;
      color: var(--green-600);
      display: inline-block;
      outline: none;
      font-size: 1.25rem;
      font-weight: 500;
      border: 0;
      border-bottom: 1px solid #5b6377;
      background-color: transparent;
    }

    #email {
      border-color: ${(props) => props.isValid};
    }
  }

  .label-float {
    margin-top: 2.5rem;
    position: relative;

    .psw {
      position: absolute;
      right: 0;
      animation: ${(props) =>
        props.changePassword ? ".5s linear .5s both animaLabel" : "initial"};

      @keyframes animaLabel {
        100% {
          transform: translateY(-18px);
        }
      }
      a {
        cursor: pointer;
        top: -34px;
        right: -260px;
        color: #5b6377;
        font-size: 14px;
        transition-duration: 0.4s;

        :hover {
          color: var(--green-600);
        }
      }
    }
  }

  button {
    cursor: pointer;
    width: 100%;
    padding: 0.5rem 1.875rem;
    text-align: center;
    border-radius: 20px;
    border: none;
    outline: none;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 3.25rem;
    margin-bottom: 5rem;

    #login {
      button {
        color: var(--blue-600);
        background: var(--green-600);
        font-size: 1rem;
        font-weight: 800;
        box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);

        :hover {
          transition: 0.4s;
          cursor: pointer;
        }
      }
    }

    #signup {
      button {
        background: transparent;
        color: var(--white-800);
        font-size: 1rem;
        font-weight: 800;

        :hover {
          transition: 0.4s;
          cursor: pointer;
          background: var(--white-800);
          box-shadow: rgba(0, 0, 0, 0.25);
          color: var(--blue-700);
        }
      }
    }
  }

  div:nth-child(1) .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 3.25rem;
    margin-bottom: 5rem;
  }
`;
