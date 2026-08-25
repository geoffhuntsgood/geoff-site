import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { HeaderLink } from "./components/HeaderLink";
import { MainCard } from "./components/MainCard";
import { theme } from "./utils/theme";

const App = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuAnchor);

  const medScreen = useMediaQuery("(max-width: 1100px)");
  const smallScreen = useMediaQuery("(max-width: 700px)");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  const menuList = (isInMenu: boolean) => (
    <>
      <HeaderLink
        label="SRC"
        link="https://www.speedrun.com/users/GeoffinitiveEdition"
        isInMenu={isInMenu}
        handleClose={handleClose}
      />
      <HeaderLink
        label="Twitch"
        link="https://www.twitch.tv/thegeoffinitiveedition"
        isInMenu={isInMenu}
        handleClose={handleClose}
      />
      <HeaderLink
        label="YouTube"
        link="https://www.youtube.com/@TheGeoffinitiveEdition"
        isInMenu={isInMenu}
        handleClose={handleClose}
      />
    </>
  );

  const boxStyles = {
    width: smallScreen ? "100%" : medScreen ? "90%" : "50%",
    textAlign: "center",
    margin: "0 auto",
    paddingBottom: "2rem"
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h1">Geoff Huntsgood</Typography>
          <Box sx={{ display: "flex" }}>
            {smallScreen ? (
              <>
                <IconButton onClick={handleClick}>
                  <Typography color="textSecondary" variant="h3">
                    ▼
                  </Typography>
                </IconButton>
                <Menu
                  open={menuOpen}
                  anchorEl={menuAnchor}
                  onClose={handleClose}
                  slotProps={{
                    paper: {
                      sx: {
                        background:
                          "linear-gradient(to bottom right, dodgerblue, blue)"
                      }
                    }
                  }}
                >
                  {menuList(true)}
                </Menu>
              </>
            ) : (
              <>{menuList(false)}</>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ ...boxStyles, float: medScreen ? null : "left" }}>
        <Typography variant="h2" color="textSecondary">
          Games
        </Typography>
        <MainCard
          header="PokéQuiz"
          description="Test your knowledge!"
          link="/pokemon-quiz"
          img="img/pikachus.png"
          lightColor="dodgerblue"
          darkColor="blue"
        />
        <MainCard
          header="DK64 Routes"
          description="Collected speedrun routes"
          link="/dk64-routes"
          img="img/dk.png"
          lightColor="yellow"
          darkColor="goldenrod"
        />
        <MainCard
          header="Squawksatoo"
          description="Complete the goals in Bananza or DK64"
          link="/squawksatoo"
          img="img/squawks.png"
          lightColor="limegreen"
          darkColor="green"
        />
      </Box>

      <Box sx={{ ...boxStyles, float: medScreen ? null : "right" }}>
        <Typography variant="h2" color="textSecondary">
          Tools
        </Typography>
        <MainCard
          header="Chat Overlay"
          description='Add ?channel="{your channel}"'
          link="/chat-overlay"
          img="img/twitch.png"
          lightColor="darkviolet"
          darkColor="purple"
        />
        <MainCard
          header="QR Generator"
          description="QR codes with fun colors!"
          link="/qr-generator"
          img="img/qrcode.png"
          lightColor="red"
          darkColor="darkred"
        />
      </Box>

      <Box
        sx={{
          clear: "both",
          width: "100%",
          textAlign: "center",
          paddingBottom: "2rem"
        }}
      >
        <Button
          href="https://buymeacoffee.com/geoffhuntsgood"
          rel="noopener noreferrer"
          target="_blank"
          variant="contained"
        >
          {`Buy me a coffee <3`}
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default App;
