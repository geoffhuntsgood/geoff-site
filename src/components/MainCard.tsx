import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
  useMediaQuery
} from "@mui/material";

export const MainCard = ({
  header,
  description,
  link,
  img,
  color1,
  color2,
  hoverColor
}: {
  header: string;
  description: string;
  link: string;
  img: string;
  color1?: string;
  color2?: string;
  hoverColor?: string;
}) => {
  const medScreen = useMediaQuery("(max-width: 1000px)");
  const smallScreen = useMediaQuery("(max-width: 600px)");

  const styles = {
    card: {
      backgroundImage:
        color1 && color2
          ? `linear-gradient(${color1}, ${color2})`
          : "linear-gradient(blue, blue)"
    },
    cardActions: {
      display: "flex",
      "&:hover": {
        backgroundColor: hoverColor ? hoverColor : "lightblue",
        transition: "background-color 0.2s ease-in-out"
      }
    }
  };

  return (
    <Box sx={{ margin: "2rem auto", width: medScreen ? "90vw" : "60vw" }}>
      <Card sx={styles.card}>
        <CardActionArea href={link} sx={styles.cardActions}>
          <CardMedia
            component="img"
            image={img}
            alt={header}
            sx={{
              height: 256,
              width: 256,
              objectFit: "contain"
            }}
          />
          <Box sx={{ display: smallScreen ? "none" : "inline" }}>
            <CardContent>
              <Typography variant="h2">{header}</Typography>
              <Typography variant="h3">{description}</Typography>
            </CardContent>
          </Box>
          <Box sx={{ display: smallScreen ? "inline" : "none" }}>
            <CardContent>
              <Tooltip arrow title={description}>
                <Typography variant="h3" sx={{ marginLeft: "-1rem" }}>
                  {header}
                </Typography>
              </Tooltip>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
};
