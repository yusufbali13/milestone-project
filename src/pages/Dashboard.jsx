import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import useBlog from "../hook/useBlogs";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import { Box } from "@mui/material";

const Dasboard = () => {
  const { getBlogData } = useBlog();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return (
    <Box minHeight={{ md: "70.4vh", lg: "82.9vh" }}>
      <Grid container justifyContent="center" spacing={5}>
        {blogs?.map((blog) => (
          <Grid item key={blog.id}>
            <HomeCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dasboard;
