import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BlogBadgeFav, {
  BlogBadgeComment,
  BlogBadgeVisit,
} from "../components/BlogBage";
import React from "react";
import { bagdeBox, btnReadMore, homeCard } from "../styles/globalStyles";
import { useNavigate } from "react-router-dom";
import useBlogs from "../hook/useBlogs";
const MyBlogCard = ({ item }) => {
  const {
    id,
    image,
    title,
    publish_date,
    content,
    author,
    likes,
    comment_count,
    post_views,
    likes_n,
  } = item;
  console.log(item);
  const navigate = useNavigate();
  const { getBlogDetailsData } = useBlogs();
  const tarih = new Date(publish_date);
  return (
    <div>
      <Card sx={homeCard}>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="green iguana"
          sx={{ objectFit: "contain", mt: 2, width: "150px" }}
        />
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "250px", md: "400px" },
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {content}
        </Typography>
        <Typography variant="p" component="div">
          {tarih.toDateString()}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "95%",
            p: 0.5,
            gap: "5px",
          }}
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 5,
              fontWeight: "600",
            }}
          >
            <AccountCircleIcon />
            {author}
          </Typography>
        </Box>
        <Box sx={bagdeBox}>
          <Box>
            <BlogBadgeFav likes_n={likes_n} id={id} likes={likes} />
            <BlogBadgeComment comment_count={comment_count} />
            <BlogBadgeVisit post_views={post_views} />
          </Box>
          <Box>
            <Button
              onClick={() => {
                getBlogDetailsData("blogs", id);
                navigate("/myblogdetail");
              }}
              sx={btnReadMore}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
};
export default MyBlogCard;
