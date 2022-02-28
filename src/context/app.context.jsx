import { createContext, useEffect, useState } from "react";

import { api } from "../data/api";

export const AppContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSignin, setIsSignin] = useState(false);

  useEffect(() => {
    const checkUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (checkUser) {
      setUser(JSON.parse(checkUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  return (
    <AppContext.Provider
      value={{ auth: !!user, user, setUser, loading, isSignin, setIsSignin }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
