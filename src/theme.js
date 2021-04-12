import React from "react";
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({

  palette: {
    primary: {
      main: "#4682b4",
    },
    secondary: {
      main: "#8fbc8f",
      light: "#B0C4DE",
    },
    textSecondary: {
      main: "#FF0000",
    },
  },

});

export default ({children}) =>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>