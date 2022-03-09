import { useContext } from "react";
import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AppContext } from "./context/app.context";
import Home from "./pages/home/Home";
import Application from "./pages/private/aplication";
import Signin from "./pages/home/Signin";
import Spinner from "./components/spinner/spinner";

function App() {
  const { auth, loading, isSignin } = useContext(AppContext);
  const Privates = ({ children }) => {
    if (loading) return <Spinner />;
    if (!auth) return <Navigate to="/" />;

    return children;
  };
  return (
    <Routers>
      <Routes>
        {isSignin ? (
          <Route path="/" element={<Signin />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}

        <Route
          path="/app"
          element={
            <Privates>
              <Application />
            </Privates>
          }
        />
      </Routes>
    </Routers>
  );
}

export default App;
