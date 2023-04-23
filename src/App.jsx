import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "./components/templates/Signin/Signin";
import Signup from "./components/templates/Signup/Signup";
import Home from "./components/pages/Home";
import "./app.css";

const App = () => {
  return (
    <Routes>
      <Route exact path="/signup" element={<Home />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route path="/" element={<Navigate to="/signin" />} />
    </Routes>
  );
};

export default App;
