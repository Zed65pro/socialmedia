import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "./components/templates/Signin/Signin";
import Signup from "./components/templates/Signup/Signup";
import { constants } from "./constants";
import "./app.css";
import Home from "./components/pages/Home";

const App = () => {
  console.log("sadsa");
  return (
    <Routes>
      <Route
        exact
        path={`${constants.BASE_URL}/`}
        element={<Navigate to={`${constants.BASE_URL}/${constants.SIGN_IN}`} />}
      />
      <Route
        exact
        path={`${constants.BASE_URL}/${constants.SIGN_UP}`}
        element={<Signup />}
      />
      <Route
        exact
        path={`${constants.BASE_URL}/${constants.SIGN_IN}`}
        element={<Signin />}
      />
      <Route
        exact
        path={`${constants.BASE_URL}/${constants.HOME}`}
        element={<Home />}
      />
    </Routes>
  );
};

export default App;
