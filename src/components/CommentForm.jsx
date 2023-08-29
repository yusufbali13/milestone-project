import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import useBlogs from "../hook/useBlogs";
const commentSchema = object({
  comment: string(),
});
const CommentForm = ({ detailsId }) => {
  console.log(detailsId);
  const { postComments } = useBlogs();
  return (
    <Box mt={4}>
      <Formik
        initialValues={{ content: "" }}
        validationSchema={commentSchema}
        onSubmit={(values, action) => {
          postComments(detailsId, { ...values, post: detailsId });
          action.resetForm();
          action.setSubmitting(false);
        }}
      >
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Comment"
                name="content"
                id="content"
                type="text"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
                error={touched.content && Boolean(errors.content)}
                helperText={errors.content}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "orange" }}
              >
                ADD COMMENT
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default CommentForm;
