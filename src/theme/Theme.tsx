import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
const options: ThemeOptions = {
  palette: {
    primary: {
      light: "#9aa2af",
      main: "#1b3670",
      dark: "#3851ac",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bcceb2",
      main: "#79d74b",
      dark: "#ce4343",
      contrastText: "#000",
    },
  },
};

const theme = createTheme(options);
const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
