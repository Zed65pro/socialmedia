import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { FiX } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSchema } from "../../Schemas/postSchema";
import { postCreate } from "../../storage/postReducers";
import { fetchUser } from "../../utils/fetchUser";
import FormInputText from "../atoms/Input/FormInputFIeld";
import FormInputHashtag from "../atoms/FormInputHashtag";
import CreatePost from "../organisms/CreatePost";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";

const AddPostOverlay = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [image, setImage] = useState(null);

  useEffect(() => {
    !user && fetchUser(navigate);
  }, []);

  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      body: "",
      hashtags: [],
    },
    resolver: yupResolver(postSchema),
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const { body, hashtags } = data;
    dispatch(
      postCreate(
        body,
        hashtags,
        user._id,
        user.username,
        image,
        user.profilePicture,
        navigate
      )
    );
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Close button */}
      <IconButton
        sx={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          color: "#000",
          backgroundColor: "#fff",
        }}
        onClick={onClose}
      >
        <FiX />
      </IconButton>
      {/* Overlay content */}
      <Box
        sx={{
          padding: "1rem",
          width: "100%",
          height: "100%",
          maxHeight: "90vh",
          maxWidth: "60vw",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          gap: "1rem",
          overflow: "hidden",
        }}
      >
        <CreatePost onSubmit={onSubmit} handleSubmit={handleSubmit}>
          <ProfilePictureUpload
            setImage={setImage}
            isPost={true}
            image={image}
          />
          <FormInputText
            control={control}
            name="body"
            label="Type your post.."
            autoComplete="none"
            autoFocus
            sx={{
              "& .MuiInputBase-root": {
                height: "200px",
                alignItems: "normal",
              },
              height: "200px",
            }}
          />
          <FormInputHashtag
            control={control}
            name="hashtags"
            label="Add your hashtag.."
          />
        </CreatePost>
      </Box>
    </Box>
  );
};

export default AddPostOverlay;
