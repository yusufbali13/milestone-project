import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useBlogCall from "../hook/useBlogCall";

const Dasboard = () => {
  const { getBlogData } = useBlogCall();

  useEffect(() => {
    getBlogData("blog");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained" sx={{ mb: 4 }}>
        NEW FIRM
      </Button>

      <Grid container justifyContent="center" spacing={2}>
        {blog?.map((firm) => (
          <Grid item key={firm.id}></Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dasboard;
