export const navStyle = {
  backgroundColor: "black",
  display: "flex",
  justifyContent: "space-between",
};

export const shadowCard = {
  p: 1,
  width: "350px",
  height: "500px",
  flexDirection: "column",
  boxShadow: "-moz-initial",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

export const icon = {
  cursor: "pointer",
  fontSize: 40,

  "&:hover": {
    color: "blue",
  },
};

export const icons = {
  cursor: "pointer",
  fontSize: 40,

  "&:hover": {
    color: "red",
  },
};
