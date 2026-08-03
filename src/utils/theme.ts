import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "darkblue"
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "2rem"
        }
      }
    }
  },
  palette: {
    text: {
      primary: "#fff"
    }
  },
  typography: {
    fontFamily: "Jersey10",
    h1: {
      fontSize: "3rem",
      flexGrow: "1"
    },
    h2: {
      fontSize: "2.5rem"
    },
    h3: {
      fontSize: "2rem"
    }
  }
});
