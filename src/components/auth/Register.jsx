import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Register = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="User Name"
        name="username"
        id="userName"
        type="text"
        variant="outlined"
      />
      <TextField
        label="First Name"
        name="first_name"
        id="firstName"
        type="text"
        variant="outlined"
      />
      <TextField
        label="Last Name"
        name="last_name"
        id="last_name"
        type="text"
        variant="outlined"
      />
      <TextField
        label="Email"
        name="email"
        id="email"
        type="email"
        variant="outlined"
      />
      <TextField
        label="password"
        name="password"
        id="password"
        type="password"
        variant="outlined"
      />
      <Button type="submit" variant="contained" size="large">
        Submit
      </Button>
    </Box>
  );
};

export default Register;
