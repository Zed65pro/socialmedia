import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiUpload } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../utils/fetchUser";

function ProfilePictureUpload({ setImage, image }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    !user && fetchUser(navigate);
  }, []);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const maxSizeInBytes = 3 * 1024 * 1024; // 3MB
    const allowedTypes = ["image/jpeg", "image/png"];

    if (
      file &&
      file.size <= maxSizeInBytes &&
      allowedTypes.includes(file.type)
    ) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.onerror = (error) => {
        console.log(error);
      };
    } else {
      // Display an error message or perform appropriate actions
      console.log("Invalid file format or size exceeded.");
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
            margin: "1rem 0",
          }}
        >
          <label htmlFor="profile-picture-input">
            {user.profilePicture || image ? (
              <img
                src={image ? image : user.profilePicture}
                alt="Profile"
                style={{
                  marginBottom: "1rem",
                  borderRadius: "50%",
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            ) : (
              <CgProfile
                size="200"
                style={{ marginBottom: "1rem", cursor: "pointer" }}
              />
            )}
          </label>
          {setImage && (
            <input
              id="profile-picture-input"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              style={{ display: "none" }}
            />
          )}
          {!user.profilePicture && (
            <Button
              variant="contained"
              component="label"
              style={{ marginBottom: "1rem" }}
            >
              <FiUpload /> Upload Profile Picture
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                style={{ display: "none" }}
              />
            </Button>
          )}
        </Box>
      )}
    </>
  );
}

export default ProfilePictureUpload;
