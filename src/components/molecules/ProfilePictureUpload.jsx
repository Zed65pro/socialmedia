import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiUpload } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { fetchUser } from "../../utils/fetchUser";

function ProfilePictureUpload({ userId }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    !user && fetchUser(navigate);
  }, []);

  const [image, setImage] = useState(null);

  const handleFileSelect = (event) => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  const handleUpload = async () => {
    if (image) {
      try {
        const response = await api.post(`/users/profile-picture`, {
          image,
        });

        console.log(response.data);
      } catch (err) {
        console.log(err.response.data.error);
      }
    }
  };

  return (
    <>
      {user && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {user.profilePicture ? (
            <img
              size="200"
              src={user.profilePicture}
              alt="Profile"
              style={{ marginBottom: "1rem" }}
            />
          ) : (
            <CgProfile size="200" style={{ marginBottom: "1rem" }} />
          )}
          {!user.profilePicture && (
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              style={{ marginBottom: "1rem" }}
            />
          )}
          <Button
            variant="contained"
            onClick={handleUpload}
            style={{ marginBottom: "1rem" }}
          >
            <FiUpload /> Upload Profile Picture
          </Button>
        </Box>
      )}
    </>
  );
}

export default ProfilePictureUpload;
