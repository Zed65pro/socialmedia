import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { constants } from "./constants";
import "./app.css";
import { LoadingScreen } from "./components/atoms/LoadingScreen.jsx";
// import { lazyLoad } from "./lazyLoad";
// const Home = lazyLoad("./components/pages/Home");
// const Signin = lazyLoad("./components/templates/Signin/Signin");
// const Signup = lazyLoad("./components/templates/Signup/Signup");
// const BadRoute = lazyLoad("./components/pages/BadRoute");
// const Profile = lazyLoad("./components/pages/Profile");
// const Friends = lazyLoad("./components/pages/Friends");
// const AddPost = lazyLoad("./components/templates/AddPost");
const Home = lazy(() => import("./components/pages/Home"));
const Signin = lazy(() => import("./components/pages/Signin"));
const Signup = lazy(() => import("./components/pages/Signup"));
// const BadRoute = lazy(() => import("./components/pages/BadRoute"));
const Profile = lazy(() => import("./components/pages/Profile"));
const Friends = lazy(() => import("./components/pages/Friends"));
const AddPost = lazy(() => import("./components/templates/AddPost"));

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route
          path={`/`}
          element={<Navigate to={`${constants.BASE_URL}/${constants.HOME}`} />}
        />
        <Route
          exact
          path={`${constants.BASE_URL}/`}
          element={
            <Navigate to={`${constants.BASE_URL}/${constants.SIGN_IN}`} />
          }
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
          path="*"
          element={
            <Navigate to={`${constants.BASE_URL}/${constants.SIGN_IN}`} />
          }
        />
        {/* <Route
        exact
        path={`${constants.BASE_URL}/${constants.WRONG_ROUTE}`}
        element={
          <BadRoute link={`${constants.BASE_URL}/${constants.SIGN_IN}`} />
        }
      /> */}
      </Routes>
    </Suspense>
  );
};

export default App;
