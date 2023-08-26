import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import BlogBadgeFav, {
  BlogBadgeComment,
  BlogBadgeVisit,
} from "../components/BlogBage";

import { useState } from "react";

import Comments from "../components/Comments";
const Detail = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const { detail } = useSelector((state) => state.blog);

  const tarih = new Date(detail.publish_date);
  return (
    <div>
      <Box sx={{ width: "600px", m: "auto", p: 2 }}>
        <CardMedia
          component="img"
          height="500"
          image={detail.image}
          alt="green iguana"
          sx={{ objectFit: "contain", mt: 2, width: "500px", m: "auto" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "95%",
            p: 0.5,
            gap: "15px",
          }}
        >
          <AccountCircleIcon sx={{ fontSize: "50px" }} color="success" />
          <Box>
            <Typography variant="h6" component="h4">
              {detail.author}
            </Typography>
            <Typography variant="h6" component="h4">
              {tarih.toDateString()}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography gutterBottom variant="h4" component="div">
            {detail.title}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {detail.content}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <BlogBadgeFav
              likes_n={detail.likes_n}
              id={detail.id}
              likes={detail.likes}
            />
            <BlogBadgeComment
              open={open}
              setOpen={setOpen}
              comment_count={detail.comment_count}
            />
            <BlogBadgeVisit post_views={detail.post_views} />
          </Box>
          {open ? <Comments details={detail} /> : ""}
        </Box>
      </Box>
    </div>
  );
};
export default Detail;
