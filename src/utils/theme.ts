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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "unset",
          fontSize: "2rem",
          backgroundColor: "darkblue",
          borderRadius: "10px",
          padding: "0 1rem",
          "&:hover": {
            backgroundColor: "dodgerblue"
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          marginRight: "-1.5rem"
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "blue",
            transition: "background-color 0.3s ease-in-out"
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: "darkblue"
        },
        tooltip: {
          fontSize: "2rem",
          backgroundColor: "darkblue"
        }
      }
    }
  },
  palette: {
    text: {
      primary: "#000",
      secondary: "#fff"
    }
  },
  typography: {
    fontFamily: "Jersey10",
    h1: {
      fontSize: "3rem",
      flexGrow: "1"
    },
    h2: {
      fontSize: "3rem",
      margin: "1rem"
    },
    h3: {
      fontSize: "2.5rem"
    },
    h4: {
      fontSize: "2rem"
    }
  }
});
