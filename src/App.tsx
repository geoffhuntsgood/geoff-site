import {
  AppBar,
  Box,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery
} from "@mui/material";
import { MainCard } from "./components/MainCard";
import { theme } from "./utils/theme";

const App = () => {
  const smallScreen = useMediaQuery("(max-width: 800px)");
  const src = "https://www.speedrun.com/users/GeoffinitiveEdition";

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h1">Geoff Huntsgood</Typography>
          <Box sx={{ display: smallScreen ? "none" : "flex" }}>
            <a
              href={src}
              target="_blank"
            >
              <Typography variant="h3" color="textPrimary">
                SRC Records
              </Typography>
            </a>
          </Box>
          <Box sx={{ display: smallScreen ? "flex" : "none" }}>
            <Tooltip arrow title="SRC Records">
              <a
                href={src}
                target="_blank"
              >
                <Typography variant="h3">🏁</Typography>
              </a>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <MainCard
        header="Pokémon Quiz"
        description="Test your Pokémon knowledge"
        link="/pokemon-quiz"
        img="img/pikachus.png"
        color1="blue"
        color2="darkblue"
        hoverColor="blue"
      />

      <MainCard
        header="DK64 Routes"
        description="All the speedrun routes in one place"
        link="/dk64-routes"
        img="img/dk.png"
        color1="gold"
        color2="orangered"
        hoverColor="gold"
      />

      <MainCard
        header="Squawksatoo"
        description="Complete the goals in Bananza or DK64"
        link="/squawksatoo"
        img="img/squawks.png"
        color1="limegreen"
        color2="green"
        hoverColor="limegreen"
      />
      <MainCard
        header="Twitch"
        description="The chillest speedruns of all time!"
        link="https://www.twitch.tv/thegeoffinitiveedition"
        img="img/twitch.png"
        color1="darkviolet"
        color2="indigo"
        hoverColor="darkviolet"
      />
    </ThemeProvider>
  );
};

export default App;
