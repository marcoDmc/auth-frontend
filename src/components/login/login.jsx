import { Wrapper } from "./login.styled";
import usernamelogo from "../../assets/usernamelogo.svg";
import passwordlogo from "../../assets/passwordlogo.svg";
import logo from "../../assets/logo.svg";
import { AppContext } from "../../context/app.context";
import { useContext, useEffect, useState } from "react";

const Login = (props) => {
  const [isOpacity, setIsOpacity] = useState("initial");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isValid, setIsValid] = useState("initial");
  const { setIsSignin } = useContext(AppContext);

  useEffect(() => {
    if (!props.email || !props.password) {
      setIsDisabled(true);
      setIsOpacity(".4");
    } else {
      setIsDisabled(false);
      setIsOpacity("initial");
    }
  }, [props.email, props.password]);

  useEffect(() => {
    if (!props.email || !props.password) {
      setIsValid("red");
    } else {
      setIsValid("initial");
    }
  }, [props.email, props.password]);

  const handleSignin = () => {
    setIsSignin((prev) => !prev);
  };
  return (
    <Wrapper
      changePassword={props.password}
      isOpacity={isOpacity}
      isValid={isValid}
    >
      <form className="card" onSubmit={props.submit}>
        <div className="logo">
          <img src={logo} alt="Logo Jade Dragon" />
        </div>

        <div className="label-float">
          <img src={usernamelogo} alt="" />
          <input
            type="email"
            id="email"
            maxLength="120"
            ref={props.refEmail}
            value={props.email}
            onChange={(event) => props.setEmail(event.target.value)}
            style={{ borderColor: props.isValid }}
          />
        </div>

        <div className="label-float">
          <img src={passwordlogo} alt="" />
          <input
            type="password"
            id="password"
            maxLength="24"
            value={props.password}
            onChange={(event) => props.setPassword(event.target.value)}
          />
          <span className="psw">
            <a href="#">Forget Password?</a>
          </span>
        </div>

        <div className="buttons">
          <div id="login">
            <button
              type="submit"
              disabled={isDisabled}
              style={{ opacity: isOpacity }}
            >
              LOGIN
            </button>
          </div>
          <div id="signup">
            <button type="button" onClick={handleSignin}>
              SIGNUP
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Login;
