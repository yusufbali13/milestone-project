import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  getSuccess,
  fetchFail,
  getDetailSuccess,
} from "../features/blogSlice";
import { toastifySuccess, toastifyError } from "../helper/Toastify";
import { useNavigate } from "react-router-dom";

const useBlogs = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  console.log(token);

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
      navigate(`/detail/${id}`);
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const getUserBlogs = async (dataName, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/?author=${id}`,
        config
      );
      dispatch(getSuccess({ dataName, data }));
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const getCurrentData = async (dataName, blogName, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/api/${blogName}/${id}/`,
        config
      );
      dispatch(getSuccess({ dataName, data }));
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
      await axios.delete(`${baseURL}/api/blogs/${id}/`, config);
      toastifySuccess("The blog has been successfully deleted.");
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };
  const updateBlog = async (id, formValues) => {
    dispatch(fetchStart());
    try {
      await axios.put(`${baseURL}/api/blogs/${id}/`, formValues, config);
      getBlogData("blogs");
      getCurrentData("activeBlog", "blogs", id);
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
        config
      );
      getBlogDetailsData("blogs", id);
      getBlogData("blogs");
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const postComments = async (comment, id) => {
    dispatch(fetchStart());
    try {
      await axios.post(`${baseURL}/api/comments/${id}/`, comment, config);
      getBlogData("blogs");
      getComments("comments", id);
      getCurrentData("activeBlog", "blogs", id);
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
    getCurrentData,
    delBlog,
    updateBlog,
    getUserBlogs,
    getBlogDetailsData,
  };
};
export default useBlogs;
