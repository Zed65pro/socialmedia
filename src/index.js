import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./storage/useLogin";

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>
);
