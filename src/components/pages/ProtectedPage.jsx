import React, { useEffect } from "react";
import { getToken } from "../../storage/authStorage";
import { constants } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchUser } from "../../utils/fetchUser";
import { LoadingScreen } from "../atoms/LoadingScreen";
import Navbar from "../organisms/Navbar/NavBar";
import Footer from "../organisms/Footer/Footer";

const ProtectedPage = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!getToken()) navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
    else if (!user) {
      fetchUser(navigate);
    }
  }, [user, navigate]);

  if (!user) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default ProtectedPage;
