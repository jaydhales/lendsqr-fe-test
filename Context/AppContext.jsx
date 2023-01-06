import React, { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const localData = JSON.parse(localStorage.getItem("lendsqr-login"));

  useEffect(() => {
    if (localData === null) {
      localStorage.setItem(
        "lendsqr-login",
        JSON.stringify({
          isLoggedIn: false,
        })
      );
    }
  }, []);

  const handleLogin = (e) => {
    localStorage.setItem(
      "lendsqr-login",
      JSON.stringify({
        isLoggedIn: true,
      })
    );

    window.location.reload();
  };

  const handleLogout = (e) => {
    localStorage.setItem(
      "lendsqr-login",
      JSON.stringify({
        isLoggedIn: false,
      })
    );

    window.location.reload();
  };

  return (
    <AppContext.Provider
      value={{
        localData,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
