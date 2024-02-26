import React, { createContext, useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

import './App.css';
import NotFoundPage from "./pages/Notfoundpage";
import UserRoutes from "./routes/user/UserRoutes";
// import routes from "./routes/user/UserRoutes";

export const AppContext = createContext({});

function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const roles = "ROLE_USER";

  const authRouteRender = () => {
    if (!authenticated) {
      return (
        UserRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))
      );
    } else {
      let roleRoutes;
      switch (true) {
        case roles.includes("ROLE_USER"): roleRoutes = UserRoutes; break;
        default: roleRoutes = UserRoutes; break;
      }
      return (
        roleRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))
      );
    }
  };

  useMemo(() => {
    nprogress.start();
  }, []);

  useEffect(() => {
    nprogress.done();
  }, []);

  return (
    <AppContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        timeZone: new Date().getTimezoneOffset(),
      }}
    >
      <Routes>
        {authRouteRender()}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;