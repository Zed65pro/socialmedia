import React from "react";
import { Route, Navigate, useLocation, Routes } from "react-router-dom";
import Signin from "./components/templates/Signin/Signin";
import Signup from "./components/templates/Signup/Signup";
import Home from "./components/pages/Home";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path={`${process.env.REACT_APP_ROOT_ROUTE}/signup`}
          element={<Signup />}
        />
        <Route
          exact
          path={`${process.env.REACT_APP_ROOT_ROUTE}/signin`}
          element={<Signin />}
        />
        <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
