import { Wrapper } from "./signin.styled";

import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdReturnLeft } from "react-icons/io";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import { api } from "../../data/api";

const Signin = () => {
  const [isChangeEmail, setIsChangeEmail] = useState("");
  const [isChangePassword, setIsChangePassword] = useState("");
  const [isLetterEmail, setIsLetterEmail] = useState(false);
  const [isLetterPassword, setIsLetterPassword] = useState(false);
  const [isValid, setIsValid] = useState("initial");

  const { setUser, setIsSignin } = useContext(AppContext);
  const navegate = useNavigate();
  const refEmail = useRef();

  useEffect(() => {
    if (!isChangeEmail) {
      setIsLetterEmail(false);
      refEmail.current.focus();
    } else {
      setIsLetterEmail(true);
    }
  }, [isChangeEmail]);

  useEffect(() => {
    if (!isChangePassword) {
      setIsLetterPassword(false);
    } else {
      setIsLetterPassword(true);
    }
  }, [isChangePassword]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isChangeEmail.includes(".com") || !isChangeEmail.includes("@")) {
      setIsValid("red");
      refEmail.current.focus();
    } else {
      setIsValid("initial");
    }
    if (isChangeEmail && isChangePassword) {
      try {
        const response = await api.post("/signin", {
          email: isChangeEmail,
          password: isChangePassword,
        });
        const user = response.data.user;
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(user);

        navegate("/app");
      } catch (error) {
        console.error(error);
      }
    } else {
      return;
    }

    isChangeEmail("");
    isChangePassword("");
    refEmail.current.focus();
  };

  return (
    <Wrapper isLetterEmail={isLetterEmail} isLetterPassword={isLetterPassword}>
      <div className="img-container"></div>
      <div className="form-container">
        <span>
          <h1>sign in</h1>
          <IoMdReturnLeft
            className="IoMdReturnLeft"
            onClick={() => setIsSignin((prev) => !prev)}
          />
        </span>
        <form onSubmit={handleSubmit}>
          <span>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              value={isChangeEmail}
              onChange={(event) => setIsChangeEmail(event.target.value)}
              ref={refEmail}
              maxLength="120"
              style={{ borderColor: isValid }}
            />
          </span>
          <span>
            <label htmlFor="password">password</label>
            <input
              type="password"
              maxLength="24"
              id="password"
              value={isChangePassword}
              onChange={(event) => setIsChangePassword(event.target.value)}
            />
          </span>
          <button>
            sign up <AiOutlineArrowRight />
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Signin;
