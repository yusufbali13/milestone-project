import { Box } from "@mui/material";
import { Formik } from "formik";

const NewBlog = () => {
  return (
    <div>
      <Formik>
        initialValues=
        {{
          title: "",
          image: "",
          content: "",
          category: "",
          status: "",
        }}
        onSubmit=
        {(values, action) => {
          action.resetForm();
          action.setSubmitting(false);
        }}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Title*"
            name="title"
            id="title"
            type="title"
            variant="outlined"
            onChange={handleChange}
            value={values.title}
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
        </Box>
      </Formik>
    </div>
  );
};

export default NewBlog;
