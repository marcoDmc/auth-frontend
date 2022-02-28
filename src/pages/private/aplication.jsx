import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../data/api";
import { AppContext } from "../../context/app.context";
import Main from "../../components/main";

const App = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
    api.defaults.headers.Authorization = null;
  };

  return <Main logout={logout} />;
};

export default App;
