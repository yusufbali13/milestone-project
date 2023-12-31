import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import useAuth from "../hook/useAuth";
import { cardBtn } from "../styles/globalStyles";

const Login = () => {
  const { login } = useAuth();

  return (
    <Box minHeight={{ xs: "79.2vh", md: "70.4vh", lg: "78.8vh" }}>
      <Container>
        <Grid container justifyContent="center" direction="row-reverse">
          <Grid item xs={12} sm={10} md={6} mt={6}>
            <Avatar
              sx={{
                backgroundColor: "black",
                m: "auto",
                width: 35,
                height: 35,
                p: 0.5,
                marginBottom: 1,
              }}
            >
              <LockIcon size="30" />
            </Avatar>
            <Typography variant="h5" align="center" mb={4}>
              Sign in
            </Typography>

            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values, action) => {
                login(values);
                action.resetForm();
                action.setSubmitting(false);
              }}
            >
              {({ handleChange, values }) => (
                <Form>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      margin: "auto",
                    }}
                  >
                    <TextField
                      label="Email Address*"
                      name="email"
                      id="email"
                      type="email"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.email}
                    />
                    <TextField
                      label="Password *"
                      name="password"
                      id="password"
                      type="password"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.password}
                    />
                    <Button variant="contained" type="submit" sx={cardBtn}>
                      SIGN IN
                    </Button>
                    <Box>
                      <span>
                        Don't have an account?{" "}
                        <Link to="/register">Sign Up</Link>
                      </span>
                    </Box>
                  </Box>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
