import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 1,
        textAlign: "center",
        height: "4.5rem",
        marginTop: 4,
      }}
    >
      <Typography>Developed by Yusuf Balı</Typography>
      <Typography> Copyright © {new Date().getFullYear()}</Typography>
    </Grid>
  );
};

export default Footer;
