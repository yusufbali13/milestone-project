import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import useBlog from "../hook/useBlogs";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";

const Dasboard = () => {
  const { getBlogData } = useBlog();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return (
    <div>
      <Grid container justifyContent="center" spacing={5}>
        {blogs?.map((blog) => (
          <Grid item key={blog.id}>
            <HomeCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dasboard;
