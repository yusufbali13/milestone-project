import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import RegisterForm from "./RegisterForm";
import { Formik } from "formik";
import useAuth from "../hook/useAuth";
import { Box } from "@mui/material";

const Register = () => {
  const { register } = useAuth();

  return (
    <Box minHeight={{ xs: "79.2vh", md: "70.4vh", lg: "81.3vh" }}>
      <Container>
        <Grid
          container
          justifyContent="center"
          direction="row-reverse"
          rowSpacing={{ sm: 3 }}
        >
          <Grid item xs={12} sm={10} md={6}>
            <Avatar
              sx={{
                backgroundColor: "black",
                m: "auto",
                width: 40,
                height: 40,
              }}
            >
              <LockIcon size="30" />
            </Avatar>
            <Typography variant="h5" align="center" mb={2}>
              Sign Up
            </Typography>

            <Formik
              initialValues={{
                username: "",
                email: "",
                image: "",
                bio: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                register({ ...values, password2: values.password });
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <RegisterForm {...props} />}
            ></Formik>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;
