import { useEffect } from "react";
import useBlogs from "../hook/useBlogs";
import { Helmet } from "react-helmet";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyBlogCard from "../components/MyBlogCard";
import { cardBtn } from "../styles/globalStyles";
const MyBlog = () => {
  const { getBlogData } = useBlogs();
  const { blogs } = useSelector((state) => state.blog);
  const { data } = useSelector((state) => state.auth);
  console.log(blogs);
  const myBlog = blogs.filter((blog) => blog.author === data.username);
  const navigate = useNavigate();

  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return (
    <Box minHeight={{ xs: "79.2vh", md: "70.4vh", lg: "78.8vh" }}>
      <Helmet>
        <title>My Blogs</title>
      </Helmet>
      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        container
        spacing={2}
        mt="10px"
        p="10px"
      >
        {myBlog.length ? (
          myBlog.map((item, index) => {
            return (
              <Grid key={index} item xs={10} md={6} lg={4} xl={3}>
                <MyBlogCard item={item} />
              </Grid>
            );
          })
        ) : (
          <Box mt={10}>
            <Typography align="center" color="error" marginBottom={5}>
              No Blogs Data...
            </Typography>
            <Button onClick={() => navigate("/newblog")} sx={cardBtn}>
              ADD NEW BLOG
            </Button>
          </Box>
        )}
      </Grid>
    </Box>
  );
};
export default MyBlog;
