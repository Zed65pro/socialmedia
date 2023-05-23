import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import store from "./storage/rootReducers";

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
        </LocalizationProvider>
      </Router>
    </Provider>
  </ThemeProvider>
);
