import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { title } = useSelector((state) => state.block);

  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ p: 1, objectFit: "contain", height: "130px" }}
        image=""
        title="firm-image"
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"></Typography>
        <Typography variant="body2" color="text.secondary">
          sdadasd sdasdad sdas
        </Typography>
      </CardContent>

      <Typography variant="body2" color="text.secondary"></Typography>
      <Grid container justifyContent="center" spacing={2}>
        {title?.map((item) => (
          <Grid item>{item.title}</Grid>
        ))}
      </Grid>
      <Outlet />
    </Card>
  );
};

export default Dashboard;
