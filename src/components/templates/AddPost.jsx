import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSchema } from "../../Schemas/postSchema";
import { postCreate } from "../../storage/postReducers";
import { fetchUser } from "../../utils/fetchUser";
import FormInputText from "../atoms/Input/FormInputFIeld";
import FormInputHashtag from "../atoms/FormInputHashtag";
import CreatePost from "../organisms/CreatePost";
import Footer from "../organisms/Footer/Footer";
import Navbar from "../organisms/Navbar/NavBar";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";

const AddPost = () => {
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
      postCreate(body, hashtags, user._id, user.username, image, navigate)
    );
  };

  return (
    <>
      {user && (
        <div>
          <Navbar />
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
          <Footer />
        </div>
      )}
    </>
  );
};

export default AddPost;
