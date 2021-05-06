import React, { useEffect } from "react";
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from "@material-ui/styles";
import "../styles/tailwind.css";
import "../styles/tailwind-utils.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
      <StylesProvider injectFirst>
        <MaterialUIThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MaterialUIThemeProvider>
      </StylesProvider>
  );
};

export default MyApp;
