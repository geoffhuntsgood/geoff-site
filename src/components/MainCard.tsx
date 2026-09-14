import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

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
  const styles = {
    card: {
      margin: "2rem",
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
    <Card sx={styles.card}>
      <CardActionArea href={link} sx={styles.cardActions}>
        <CardContent sx={{ width: "90%" }}>
          <img
            src={img}
            alt={header}
            style={{
              margin: "0 1rem"
            }}
          />
          <Typography variant="h3">{header}</Typography>
          <Typography variant="h4">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
