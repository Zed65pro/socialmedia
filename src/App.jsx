import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "./components/templates/Signin/Signin";
import Signup from "./components/templates/Signup/Signup";
import Home from "./components/pages/Home";
import { constants } from "./constants";
import "./app.css";

const App = () => {
  return (
    <Routes>
      <Route exact path={`${constants.BASE_URL}/signup`} element={<Home />} />
      <Route exact path={`${constants.BASE_URL}/signin`} element={<Signin />} />
      <Route
        path={`${constants.BASE_URL}`}
        element={<Navigate to={`${constants.BASE_URL}/signin`} />}
      />
    </Routes>
  );
};

export default App;
