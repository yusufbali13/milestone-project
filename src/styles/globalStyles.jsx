export const shadowCard = {
  width: "350px",
  height: "520px",
  flexDirection: "column",
  boxShadow: "-moz-initial",
  margin: "auto",
  marginTop: "130px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

export const homeCard = {
  padding: 3,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

export const cardBtn = {
  color: "white",
  backgroundColor: "black",
  borderRadius: "7px",
  "&:hover": {
    backgroundColor: "black",
  },
};

export const icon = {
  cursor: "pointer",
  fontSize: 40,
  color: "black",

  "&:hover": {
    color: "blue",
  },
};

export const icons = {
  cursor: "pointer",
  fontSize: 40,
  color: "black",

  "&:hover": {
    color: "red",
  },
};

export const bagdeBox = {
  display: "flex",
  justifyContent: "space-between",
  width: "97%",
  mt: "10px",
};

export const profileBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  m: "auto",
  p: 25,
  height: { xs: "500px", md: "550px" },
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  borderRadius: "10px",
  mt: 10,
  width: { xs: "300px", md: "500px", lg: "500px" },
};

export const profilTypograf = {
  marginTop: "20px",
  fontWeight: "600",
  width: { xs: "300px", md: "400px", lg: "500px" },
  padding: "10px",
};

export const delBtn = {
  color: "white",
  backgroundColor: "red",
  borderRadius: "7px",
  width: 120,
  height: 30,
  "&:hover": {
    backgroundColor: "red",
  },
};

export const upBtn = {
  color: "white",
  backgroundColor: "black",
  borderRadius: "7px",
  width: 120,
  height: 30,
  "&:hover": {
    backgroundColor: "black",
  },
};

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
