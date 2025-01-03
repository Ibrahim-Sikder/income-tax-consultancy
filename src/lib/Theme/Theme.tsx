import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0795FE",
    },
    secondary: {
      main: "#0795FE",
      light: "#092A49",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
          boxShadow: "none",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#0B1134CC",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
