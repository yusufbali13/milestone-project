import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import image from "../assets/avatar.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { icon, icons, shadowCard } from "../styles/globalStyles";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card sx={shadowCard}>
      <CardMedia
        sx={{ objectFit: "contain", height: "180px" }}
        image={image}
        title="image"
        component="img"
      />
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          fontWeight="bold"
          textAlign="center"
        >
          Yusuf
        </Typography>
        <Typography
          variant="h6"
          display="flex"
          justifyContent="center"
          fontWeight="bold"
        >
          Front-End Team
        </Typography>
      </CardContent>
      <Typography>
        <Link to="https://www.linkedin.com/school/clarusway/" target="_blank">
          <LinkedInIcon sx={icon} />
        </Link>

        <Link
          to="https://twitter.com/clarusway?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
        >
          <TwitterIcon fontSize="large" sx={icon} />
        </Link>

        <Link to="https://www.instagram.com/clarusway/?hl=en" target="_blank">
          <InstagramIcon sx={icons} />
        </Link>

        <Link to="https://www.youtube.com/c/clarusway" target="_blank">
          <YouTubeIcon sx={icons} />
        </Link>
      </Typography>
    </Card>
  );
};

export default About;
