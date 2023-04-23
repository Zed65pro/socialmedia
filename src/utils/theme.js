import { createTheme } from "@mui/material/styles";

// (Nova Oval,Rubik Wet Paint");
const theme = createTheme({
  typography: {
    fontFamily: "AudioWide, sans-serif",
    fontSize: 16,
    fontWeight: 400,
  },
  palette: {
    primary: {
      main: "#007aff",
    },
    secondary: {
      main: "#ff3b30",
    },
  },
});

export default theme;
