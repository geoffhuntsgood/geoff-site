import { MenuItem, Typography } from "@mui/material";

export const HeaderLink = ({
  label,
  link,
  isInMenu,
  handleClose
}: {
  label: string;
  link: string;
  isInMenu?: boolean;
  handleClose?: () => void;
}) => {
  const typography = (
    <Typography variant="h3" color="textSecondary">
      {label}
    </Typography>
  );

  return isInMenu ? (
    <MenuItem
      component="a"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      onClick={handleClose}
    >
      {typography}
    </MenuItem>
  ) : (
    <a href={link} rel="noopener noreferrer" target="_blank">
      {typography}
    </a>
  );
};
