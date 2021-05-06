import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#cb5e3c",
      main: "#bf360c",
      dark: "#852508",
      contrastText: "#fff",
    },
    secondary: {
      light: "#474f97",
      main: "#1a237e",
      dark: "#121858",
      contrastText: "#000",
    },
  },
});
export default theme;
