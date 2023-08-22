import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import image from "../assets/cw.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const About = () => {
  return (
    <Card
      sx={{
        p: 1,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "-moz-initial",
      }}
    >
      <CardMedia
        sx={{ objectFit: "contain", height: "60px" }}
        image={image}
        title="image"
        component="img"
      />
      <CardContent>
        <Typography variant="h3" component="div">
          Clarusway
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          display="flex"
          justifyContent="center"
        >
          Full Stack Team
        </Typography>
      </CardContent>
      <Typography sx={{ cursor: "pointer" }}>
        <LinkedInIcon />
        <TwitterIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </Typography>
    </Card>
  );
};

export default About;
