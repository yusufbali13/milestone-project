import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Dashboard = () => {
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
    </Card>
  );
};

export default Dashboard;
