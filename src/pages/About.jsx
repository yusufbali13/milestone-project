import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import image from "../assets/cw.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { icon, icons, shadowCard } from "../styles/globalStyles";

const About = () => {
  return (
    <Card sx={shadowCard}>
      <CardMedia
        sx={{ objectFit: "contain", height: "70px" }}
        image={image}
        title="image"
        component="img"
      />
      <CardContent>
        <Typography variant="h3" component="div" fontWeight="bold">
          Clarusway
        </Typography>
        <Typography
          variant="h6"
          display="flex"
          justifyContent="center"
          fontWeight="bold"
        >
          Full Stack Team
        </Typography>
      </CardContent>
      <Typography>
        <LinkedInIcon sx={icon} />
        <TwitterIcon sx={icon} />
        <InstagramIcon sx={icons} />
        <YouTubeIcon sx={icons} />
      </Typography>
    </Card>
  );
};

export default About;
