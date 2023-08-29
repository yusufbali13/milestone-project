import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  getSuccess,
  fetchFail,
  getDetailSuccess,
  getCategorySuccess,
} from "../features/blogSlice";
import { toastifySuccess, toastifyError } from "../helper/Toastify";

const useBlogs = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const config = {
    headers: { Authorization: `Token ${token}` },
  };

  const getBlogData = async (dataName) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/api/${dataName}/`
      );
      dispatch(getSuccess({ dataName, data }));
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const getBlogDetailsData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/api/${url}/${id}/`,
        config
      );
      dispatch(getDetailSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const getCategories = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/api/categories/`,
        config
      );
      dispatch(getCategorySuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const postBlogData = async (dataName, formValues) => {
    dispatch(fetchStart());
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/${dataName}/`,
        formValues,
        config
      );
      toastifySuccess("New blog has been successfully created.");
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const delBlog = async (id) => {
    dispatch(fetchStart());
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/${id}/`,
        config
      );
      toastifySuccess("The blog has been successfully deleted.");
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const updateBlog = async (id, formValues) => {
    dispatch(fetchStart());
    try {
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/${id}/`,
        formValues,
        config
      );
      getBlogData("blogs");
      toastifySuccess("The blog has been successfully updated.");
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const postFavs = async (id) => {
    dispatch(fetchStart());
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/likes/${id}/`,
        {},
        config
      );
      getBlogDetailsData("blogs", id);
      getBlogData("blogs");
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const postComments = async (id, comment) => {
    dispatch(fetchStart());
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/comments/${id}/`,
        comment,
        config
      );
      getBlogDetailsData("blogs", id);
      toastifySuccess("Your comments has been successfully added.");
    } catch (error) {
      toastifyError(error.message);
    }
  };

  const postNewBlog = async (values) => {
    dispatch(fetchStart());
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/`,
        values,
        config
      );
      getBlogDetailsData("blogs");
      toastifySuccess("Your comments has been successfully added.");
    } catch (error) {
      toastifyError(error.message);
    }
  };

  return {
    getBlogData,
    postBlogData,
    postFavs,
    postComments,
    delBlog,
    updateBlog,
    getBlogDetailsData,
    getCategories,
    postNewBlog,
  };
};
export default useBlogs;
