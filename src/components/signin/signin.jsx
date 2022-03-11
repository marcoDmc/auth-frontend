import { Section } from "./signin.styled";

import logo from "../../assets/logo.svg";
import { AppContext } from "../../context/app.context";
import { useContext, useEffect, useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Login = (props) => {
  const [isOpacity, setIsOpacity] = useState("initial");

  const [isValid, setIsValid] = useState("initial");
  const { setIsSignin } = useContext(AppContext);

  useEffect(() => {
    if (!props.email || !props.password) {
      props.setIsDisabled(true);
      setIsOpacity(".4");
    } else {
      props.setIsDisabled(false);
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
    <Section
      changePassword={props.password}
      isOpacity={isOpacity}
      isValid={isValid}
      isDisabled={props.isDisabled}
    >
      <img src={logo} alt="easy bank" />
      <h1>Welcome back</h1>
      <p>Sign in to continue using tipe</p>
      <form onSubmit={props.submit}>
        <div id="input__form__one">
          <MdEmail className="MdEmail" />
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
        <div id="input__form__two">
          <AiFillLock className="AiFillLock" />
          <input
            type="password"
            id="password"
            maxLength="24"
            value={props.password}
            onChange={(event) => props.setPassword(event.target.value)}
          />
        </div>
        <a href="#">Forget your Password?</a>

        <button disabled={props.isDisabled} style={{ opacity: isOpacity }}>
          SIGN IN
        </button>

        <span>
          Don't have an account ? <p onClick={handleSignin}>Register Here</p>
        </span>
      </form>
    </Section>
  );
};

export default Login;
