import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Signin from "./components/templates/Signin/Signin";
import Signup from "./components/templates/Signup/Signup";
import { constants } from "./constants";
import Home from "./components/pages/Home";
import BadRoute from "./components/pages/BadRoute";
import Profile from "./components/pages/Profile";
import Friends from "./components/pages/Friends";
import AddPost from "./components/templates/AddPost";
import "./app.css";
import ProfileEdit from "./components/organisms/ProfileEdit";

const App = () => {
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
      <Route
        exact
        path={`${constants.BASE_URL}/${constants.WRONG_ROUTE}`}
        element={
          <BadRoute link={`${constants.BASE_URL}/${constants.SIGN_IN}`} />
        }
      />
      <Route
        path={`${constants.BASE_URL}/${constants.USER}/:id`}
        element={<Profile />}
      />
      <Route
        exact
        path={`${constants.BASE_URL}/${constants.FRIENDS}`}
        element={<Friends />}
      />
      <Route
        exact
        path={`${constants.BASE_URL}/${constants.ADDPOST}`}
        element={<AddPost />}
      />
      <Route
        path={`/`}
        element={<Navigate to={`${constants.BASE_URL}/${constants.HOME}`} />}
      />
      <Route
        path="*"
        element={
          <Navigate to={`${constants.BASE_URL}/${constants.WRONG_ROUTE}`} />
        }
      />
    </Routes>
  );
};

export default App;
