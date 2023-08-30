import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import useBlogs from "../hook/useBlogs";
import { useSelector } from "react-redux";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { cardBtn } from "../styles/globalStyles";
const blogSchema = object({
  title: string().required("Bu alan zorunludur"),
  image: string().required("Bu alan zorunludur"),
  content: string().required("Bu alan zorunludur"),
  category: string().required("Bu alan zorunludur"),
  status: string().required("Bu alan zorunludur"),
});
const status = [
  {
    id: "d",
    name: "Draft",
  },
  {
    id: "p",
    name: "Published",
  },
];
const NewBlog = () => {
  const { categories, newBlog } = useSelector((state) => state.blog);

  const { getCategories, postNewBlog } = useBlogs();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Box
      sx={{ m: "auto", mt: 10 }}
      height={{ xs: "75vh", md: "73.8vh" }}
      width={{ xs: 350, md: 500 }}
    >
      <Helmet>
        <title>New-Blog</title>
      </Helmet>
      <Formik
        initialValues={{
          title: "",
          image: "",
          content: "",
          category: "",
          status: "",
        }}
        validationSchema={blogSchema}
        onSubmit={(values, action) => {
          postNewBlog(values);
          navigate("/");
          action.resetForm();
          action.setSubmitting(false);
        }}
      >
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form>
            <Typography variant="h4" align="center" mb={5} color="black">
              NEW BLOG
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Title *"
                name="title"
                id="title"
                type="text"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                error={touched.title && Boolean(errors.title)}
                helpertext={errors.title}
              />
              <TextField
                label="Image URL *"
                name="image"
                id="image"
                type="url"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
                error={touched.image && Boolean(errors.image)}
                helpertext={errors.image}
              />
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Category *
                </InputLabel>
                <Select
                  label="Category *"
                  id="category"
                  name="category"
                  variant="outlined"
                  value={values.category}
                  onChange={handleChange}
                  error={touched.category && Boolean(errors.category)}
                  helpertext={errors.category}
                >
                  {categories.map(({ id, name }) => (
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Status*
                </InputLabel>
                <Select
                  label="Status"
                  id="status"
                  name="status"
                  variant="outlined"
                  value={values.status}
                  onChange={handleChange}
                  error={touched.status && Boolean(errors.status)}
                  helpertext={errors.status}
                >
                  {status.map(({ id, name }) => (
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Content *"
                name="content"
                id="content"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
                error={touched.content && Boolean(errors.content)}
                helpertext={errors.content}
              />
              <Button variant="contained" type="submit" sx={cardBtn}>
                NEW BLOG
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default NewBlog;
