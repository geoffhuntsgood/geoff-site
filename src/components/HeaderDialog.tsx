import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export const HeaderDialog = ({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const wrapperStyle = {
    background: "linear-gradient(to bottom right, dodgerblue, blue)"
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Box sx={wrapperStyle}>
        <DialogTitle>
          <Typography variant="h1">The Geoffiest</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h4" align="center">
            I'm Geoff, a software developer and video game speedrunner. I like
            to make fun things that I hope others like too!
          </Typography>
          <hr style={{ border: "1px solid black" }} />
          <Typography variant="h4" align="center">
            I've made a bunch of websites and components over the years, and the
            best ones are those that show someone's personality. For me, that's
            a simple layout with bright, fun colors and a nerdy font.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Neat
          </Button>
          <Button
            href="https://buymeacoffee.com/geoffhuntsgood"
            rel="noopener noreferrer"
            target="_blank"
            variant="contained"
          >
            {`Buy me a coffee <3`}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
