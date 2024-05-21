import { createTheme } from "@mui/material";

export const MUItheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#222222", // Lighter shade of the primary color
      main: "#000000", // Main primary color
      dark: "#111111", // Darker shade of the primary color
      contrastText: "#fff", // Text color on primary color
    },
  },
});
