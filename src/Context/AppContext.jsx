import axios from "axios";
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
        // random user id between 1 and 100
        id: Math.floor(Math.random() * 100) + 1,
      })
    );

    window.location.reload();
  };

  const getAdminDetails = async (id) => {
    const result = await fetchApi(`users/${id}`, "get");
    localStorage.setItem("userDetails", JSON.stringify(result));

    return result;
  };

  const fetchApi = async (url, method) => {
    const result = await axios({
      method,
      url: `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/${url}`,
    });

    return result.data;
  };

  const handleLogout = (e) => {
    localStorage.setItem(
      "lendsqr-login",
      JSON.stringify({
        isLoggedIn: false,
      })
    );
    localStorage.removeItem("userDetails");

    window.location.reload();
  };

  return (
    <AppContext.Provider
      value={{
        localData,
        handleLogin,
        handleLogout,
        getAdminDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
