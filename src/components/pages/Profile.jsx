import React, { useEffect } from "react";
import Navbar from "../organisms/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Post from "../molecules/Post";
import { getCurrentUser } from "../../storage/authReducers";
import { useNavigate } from "react-router-dom";
import { constants } from "../../constants";
import { getToken } from "../../storage/authStorage";
import CreatePost from "../organisms/CreatePost";
import FormInputText from "../atoms/Input/FormInputFIeld";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { postSchema } from "../../Schemas/postSchema";
import { postCreate } from "../../storage/postReducers";
import { Grid, Typography } from "@mui/material";
import Posts from "../organisms/Posts";
import { fetchUser } from "../../utils/fetchUser";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loader);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    // fetchUser(navigate);
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

    const body = event.target.body.value;
    const hashtags = [event.target.hashtags.value];
    console.log(user._id);
    dispatch(postCreate(body, hashtags, user._id, navigate));
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      <Navbar />
      <CreatePost onSubmit={onSubmit} handleSubmit={handleSubmit}>
        {loading && <p>Loading...</p>}
        <FormInputText
          control={control}
          name="body"
          label="Insert here.."
          autoComplete="none"
          autoFocus
        />
        <FormInputText
          control={control}
          name="hashtags"
          label="Hashtags"
          autoFocus
        />
      </CreatePost>
      <Posts />
      {error && (
        <Typography
          sx={{ textAlign: "center", color: "red" }}
          position={"center"}
        >
          {error.message}
        </Typography>
      )}
      {user && user.posts.map((post) => <Post key={post} />)}
    </>
  );
};

export default Profile;
