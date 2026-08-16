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
  lightColor,
  darkColor
}: {
  header: string;
  description: string;
  link: string;
  img: string;
  lightColor: string;
  darkColor: string;
}) => {
  const medScreen = useMediaQuery("(max-width: 1200px)");
  const smallScreen = useMediaQuery("(max-width: 600px)");

  const styles = {
    card: {
      backgroundImage: `linear-gradient(${lightColor}, ${darkColor})`
    },
    cardActions: {
      display: "flex",
      "&:hover": {
        backgroundColor: lightColor,
        transition: "background-color 0.3s ease-in-out"
      }
    }
  };

  return (
    <Box sx={{ margin: "2rem auto", width: medScreen ? "90%" : "60%" }}>
      <Card sx={styles.card}>
        <CardActionArea href={link} sx={styles.cardActions}>
          <CardMedia
            component="img"
            image={img}
            alt={header}
            sx={{
              height: 256,
              width: 256,
              objectFit: "none",
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
                <Typography variant="h2" sx={{ marginLeft: "-1rem" }}>
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
