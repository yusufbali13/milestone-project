import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { Formik } from "formik";
import useAuthCall from "../../hook/useAuthCall";

const Register = () => {
  const { register } = useAuthCall();

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "#1565C0",
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
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password });
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ mt: 2 }}>
            <span>
              Already have an account?{" "}
              <Link to="/login" color="blue">
                Sign in
              </Link>
            </span>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
