import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CreatePost = ({ children, onSubmit, handleSubmit }) => {
  const loading = useSelector((state) => state.loading);

  return (
    <Grid
      container
      component="main"
      sx={{
        // height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={10} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create your own post!
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            {children}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
