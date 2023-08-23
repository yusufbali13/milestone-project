import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

import useBlogCall from "../hook/useBlogCall";

const Dasboard = () => {
  const { blogs } = useSelector((state) => state.blog);

  const { getBlog } = useBlogCall();

  const { title } = useSelector((state) => state.blog);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained" sx={{ mb: 4 }}>
        NEW FIRM
      </Button>

      <Grid container justifyContent={"center"} spacing={2}>
        {blogs?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard
              firm={firm}
              handleOpen={handleOpen}
              info={info}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dasboard;
