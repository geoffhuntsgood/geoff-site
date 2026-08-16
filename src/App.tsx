import {
  AppBar,
  Box,
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
                        background: "linear-gradient(to bottom right, dodgerblue, blue)",
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

      <MainCard
        header="Pokémon Quiz"
        description="Test your Pokémon knowledge"
        link="/pokemon-quiz"
        img="img/pikachus.png"
        lightColor="dodgerblue"
        darkColor="blue"
      />

      <MainCard
        header="DK64 Routes"
        description="All the speedrun routes in one place"
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
    </ThemeProvider>
  );
};

export default App;
