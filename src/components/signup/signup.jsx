import { Wrapper } from "./signup.styled";

import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import { api } from "../../data/api";
import { BsArrowRightShort } from "react-icons/bs";

const Signin = () => {
  const [isOpacity, setIsOpacity] = useState("initial");

  const [changeEmail, setChangeEmail] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const refEmail = useRef(null);
  const { setUser, setIsSignin } = useContext(AppContext);
  const navegate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!changeEmail.includes(".com") || !changeEmail.includes("@")) {
      refEmail.current.focus();
      return;
    }

    if (changeEmail && changePassword) {
      try {
        const response = await api.post("/", {
          email: changeEmail,
          password: changePassword,
        });
        const user = response.data.user;
        const token = response.data.token;

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

    setChangeEmail("");
    setChangePassword("");
    refEmail.current.focus();
  };

  useEffect(() => {
    if (!changeEmail || !changePassword) {
      setIsDisabled(true);
      setIsOpacity(".4");
    } else {
      setIsDisabled(false);
      setIsOpacity("initial");
    }
  }, [changeEmail, changePassword]);

  const handleSignin = () => {
    setIsSignin((prev) => !prev);
  };

  return (
    <Wrapper isDisabled={isDisabled}>
      <h1>sign up</h1>
      <small>sign up with</small>

      <form onSubmit={handleSubmit}>
        <div className="isEmail">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={refEmail}
            value={changeEmail}
            onChange={(event) => setChangeEmail(event.target.value)}
          />
        </div>
        <div className="isPassword">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={changePassword}
            onChange={(event) => setChangePassword(event.target.value)}
          />
        </div>

        <button disabled={isDisabled} style={{ opacity: isOpacity }}>
          <BsArrowRightShort className="BsArrowRightShort" />
        </button>
      </form>
      <small>
        already have an account ?<span onClick={handleSignin}>sign in</span>
      </small>
    </Wrapper>
  );
};

export default Signin;
