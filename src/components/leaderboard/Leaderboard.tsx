import { Box, useMediaQuery } from "@mui/material";
import { LeaderboardList } from "./LeaderboardList";
import { onerd, threend, twost } from "./lists";

export const Leaderboard = () => {
  const medScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: medScreen ? "column" : "row",
        justifyContent: "center"
      }}
    >
      <LeaderboardList type="1rd" entrySet={onerd} />
      <LeaderboardList type="2st" entrySet={twost} />
      <LeaderboardList type="3nd" entrySet={threend} />
    </Box>
  );
};
