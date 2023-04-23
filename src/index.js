import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
