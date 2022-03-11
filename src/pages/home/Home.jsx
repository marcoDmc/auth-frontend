import { useContext, useRef, useState } from "react";
import { AppContext } from "../../context/app.context";
import Login from "../../components/signin/signin";
import { useNavigate } from "react-router-dom";
import { api } from "../../data/api";

const Home = () => {
  const [changeEmail, setChangeEmail] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isValid, setIsValid] = useState("initial");
  const refEmail = useRef(null);
  const { auth, setUser } = useContext(AppContext);
  const navegate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

   

    if (!changeEmail.includes(".com") || !changeEmail.includes("@")) {
      setIsValid("red");
      refEmail.current.focus();
      return;
    } else {
      setIsValid("initial");
    }

    if (changeEmail && changePassword) {
      try {
        const response = await api.post("/signin", {
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

  return (
    <Login
      submit={handleSubmit}
      navegate={navegate}
      setUser={setUser}
      auth={auth}
      password={changePassword}
      setPassword={setChangePassword}
      email={changeEmail}
      setEmail={setChangeEmail}
      refEmail={refEmail}
      isValid={isValid}
      isDisabled={isDisabled}
      setIsDisabled={setIsDisabled}
    />
  );
};

export default Home;
