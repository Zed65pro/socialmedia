import { Box } from "@mui/material";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

function ProfilePictureUpload({ setImage, image, profile, size }) {
  const user = useSelector((state) => state.user);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const maxSizeInBytes = 5 * 1024 * 1024; // 3MB
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        margin: "1rem 0",
      }}
    >
      <label htmlFor="profile-picture-input">
        {user.profilePicture || image ? (
          <img
            src={
              image
                ? image
                : profile
                ? profile.profilePicture
                : user.profilePicture
            }
            alt="Profile"
            style={{
              marginBottom: "1rem",
              borderRadius: "50%",
              width: size ? size : "300px",
              height: size ? size : "300px",
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
    </Box>
  );
}

export default ProfilePictureUpload;
