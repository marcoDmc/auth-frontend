import styled from "styled-components";

export const Wrapper = styled.section`
  :root {
    --blue-800: #12192e;
    --blue-700: #111c37;
    --blue-600: #182341;
    --blue-500: #1a2545;
    --green-600: #00a86b;
    --white-800: #faebd7;
  }

  width: 100%;
  max-width: 1400px;
  padding: 10px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  align-items: center;
  flex-direction: column;
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0 auto;
  gap: 20px;

  header {
    padding: 6px;
    width: 100%;
    max-width: 1200px;
    box-shadow: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--blue-500);
    border-radius: 10px;

    position: fixed;
    z-index: 1;
    top: 10px;
    right: 20px;
    left: 30px;

    img {
      width: 120px;
      height: 40px;
      object-fit: cover;
      margin-left: 20px;
      cursor: pointer;

      :hover {
        opacity: 0.7;
        transition: 0.4s ease;
      }
    }

    ul {
      width: 100%;
      max-width: 630px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      li {
        max-width: 100px;
        width: 100%;
        cursor: pointer;
        list-style: none;
        text-transform: capitalize;
        color: var(--white-800);
        height: 100%;
        max-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover {
          animation: 0.4s linear 0.4s both animaLi;
          transition: 0.3s ease;
        }

        @keyframes animaLi {
          100% {
            border-bottom: 1px solid var(--green-600);
          }
        }
      }
    }

    menu {
      width: 100%;
      max-width: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      button {
        display: none;
      }

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        clip-path: circle();
      }

      nav {
        position: absolute;
        bottom: 0;
        top: 50px;
        right: 60px;
        width: 100%;
        min-width: 200px;
        height: 100%;
        min-height: 250px;
        z-index: 1;
        padding: 3px 4px;
        border-radius: 10px 0px 10px 10px;
        display: ${(props) => (props.toggle ? "flex" : "none")};
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background: var(--white-800);
        box-shadow: rgba(0, 0, 0, 0.55);
        gap: 10px;
        li {
          list-style: none;
          padding: 4px;
          border-radius: 10px;
          width: 90%;
          display: flex;
          height: 40px;
          align-items: center;
          justify-content: start;
          gap: 20px;
          cursor: pointer;

          :hover {
            background: var(--blue-600);
            box-shadow: rgba(0, 0, 0, 0.35);
            color: var(--green-600);
            text-transform: capitalize;
            transition: 0.6s ease;
          }
        }
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 15px;
    width: 100%;
    max-width: 1000px;
    margin-top: 100px;

    @media (max-width: 500px) {
      display: grid;
      place-items: center;
    }

    section {
      img {
        width: 400px;
        height: 400px;
        object-fit: cover;
      }
    }

    section:nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: start;
      justify-content: space-between;
      padding: 10px;
      width: 100%;
      max-width: 1000px;

      h1 {
        font-size: 2.2rem;
        width: 100%;
        text-align: left;
      }
      p {
        width: 100%;
        text-align: left;
        text-overflow: ellipses;
        word-break: break-all;
      }
    }
    section:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
      padding: 10px;
      justify-content: space-between;
      width: 100%;
      max-width: 1000px;

      img {
        width: 400px;
        height: 250px;
        object-fit: cover;
        background-position: center center;
        border-radius: 10px;
      }
      p {
        width: 100%;
        width: 100%;
        text-align: left;
        text-overflow: ellipses;
        word-break: break-all;
      }
    }
    section:nth-child(3) {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
      padding: 10px;
      justify-content: space-between;
      width: 100%;
      max-width: 700px;

      img {
        width: 400px;
        height: 250px;
        object-fit: cover;
        background-position: center center;
        border-radius: 10px;
      }
      p {
        width: 100%;
        width: 100%;
        text-align: left;
        text-overflow: ellipses;
        word-break: break-all;
      }
    }
    section:nth-child(4) {
      flex-direction: column;
      display: flex;
      gap: 15px;
      align-items: center;
      padding: 10px;
      justify-content: space-between;
      width: 100%;
      max-width: 700px;

      img {
        width: 400px;
        height: 250px;
        object-fit: cover;
        background-position: center center;
        border-radius: 10px;
      }
      p {
        width: 100%;
        width: 100%;
        text-align: left;
        text-overflow: ellipses;
        word-break: break-all;
      }
    }
    section:nth-child(5) {
      flex-direction: column;
      display: flex;
      gap: 15px;
      align-items: center;
      padding: 10px;
      justify-content: space-between;
      width: 100%;
      max-width: 1000px;

      img {
        width: 600px;

        height: 250px;
        object-fit: cover;
        background-position: center center;
        border-radius: 10px;
      }
      p {
        width: 100%;
        width: 100%;
        text-align: left;
        text-overflow: ellipses;
        word-break: break-all;
      }
    }
    section:nth-child(6) {
      display: flex;
      gap: 15px;
      align-items: center;
      padding: 10px;
      margin-top: 30px;
      max-width: 1000px;
      width: 100%;

      justify-content: space-around;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.52);
        background: var(--white-800);
        cursor: pointer;
        max-width: 200px;
        width: 100%;
        height: 240px;

        :hover {
          transition: 0.3s ease;
          opacity: 0.7;
        }

        p {
          word-break: break-all;
          color: var(--blue-700);
        }
        small {
          width: 100%;
          text-align: center;
          color: var(--green-600);
          font-weight: bold;
        }
      }
    }

    div:nth-child(1) {
      .SiUnity {
        width: 60px;
        height: 60px;
      }
    }
    div:nth-child(2) {
      .BsWindows {
        width: 60px;
        height: 60px;
      }
    }
    div:nth-child(3) {
      .SiUnrealengine {
        width: 60px;
        height: 60px;
      }
    }
    div:nth-child(4) {
      .RiGameFill {
        width: 40px;
        height: 40px;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 30px;
    width: 100%;
    max-width: 1200px;
    padding: 4px;
    background: var(--blue-800);

    ul {
      color: var(--green-600);
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 3px;
      flex-direction: column;

      li {
        list-style: none;
        color: var(--white-800);
        cursor: pointer;

        :hover {
          opacity: 0.8;
          color: var(--green-600);
          transition: 0.4s ease;
        }
      }
    }
  }
`;
