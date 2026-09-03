import {
  List,
  ListItem,
  ListItemAvatar,
  ListSubheader,
  Typography
} from "@mui/material";
import { LeaderboardListType } from "../../utils/types";

export const LeaderboardList = ({
  entrySet,
  type
}: {
  entrySet: LeaderboardListType[];
  type: "1rd" | "2st" | "3nd";
}) => {
  const getAvatar = (index: number) => {
    const avatars = ["firstplace.png", "secondplace.png", "thirdplace.png"];
    return `img/leaderboard/${index < 3 ? avatars[index] : "other.png"}`;
  };

  return (
    <List subheader={<ListSubheader>{type}</ListSubheader>}>
      {entrySet.map((entry: LeaderboardListType, index) => (
        <ListItem key={entry.username}>
          <ListItemAvatar>
            <img width={40} src={getAvatar(index)} />
          </ListItemAvatar>
          <Typography
            variant="h4"
            color="textSecondary"
          >{`${entry.username}: ${entry.score}`}</Typography>
        </ListItem>
      ))}
    </List>
  );
};
