import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#1976D2",
        color: "white",
        py: 1,
        textAlign: "center",
        height: "4.5rem",
      }}
    >
      <Typography>Developed by Ahmet Can AYDIN</Typography>
      <Typography> Copyright © 2023</Typography>
    </Grid>
  );
};

export default Footer;
