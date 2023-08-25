import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import useBlogCall from "../hook/useBlogCall";
import { useSelector } from "react-redux";
import HomeCard from "../components/blog/HomeCard";

const Dasboard = () => {
  const { getBlogData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blogs);

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
