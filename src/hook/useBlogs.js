import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchStart, getSuccess, fetchFail } from "../features/blogSlice";
import { useAuthContext } from "../context/authContext";
import { toastifySuccess, toastifyError } from "../helper/Toastify";

const useBlogs = () => {
  const baseURL = "https://33468.fullstack.clarusway.com";
  const dispatch = useDispatch();
  const { userData } = useAuthContext();
  const config = {
    headers: { Authorization: `Token ${userData.key}` },
  };

  const getBlogData = async (dataName) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${baseURL}/api/${dataName}/`);
      dispatch(getSuccess({ dataName, data }));
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const getUserBlogs = async (dataName, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${baseURL}/api/blogs/?author=${id}`,
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
      const { data } = await axios(`${baseURL}/api/${blogName}/${id}/`, config);
      dispatch(getSuccess({ dataName, data }));
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const postBlogData = async (dataName, formValues) => {
    dispatch(fetchStart());
    try {
      await axios.post(`${baseURL}/api/${dataName}/`, formValues, config);
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
      await axios.post(`${baseURL}/api/likes/${id}/`, {}, config);
      getBlogData("blogs");
      getUserBlogs("userBlogs", userData?.user?.id);
    } catch (error) {
      dispatch(fetchFail());
      toastifyError(error.message);
    }
  };

  const getFavs = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${baseURL}/api/likes/${id}/`);
    } catch (error) {
      toastifyError(error.message);
    }
  };

  const getComments = async (dataName, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${baseURL}/api/comments/${id}/`);
      dispatch(getSuccess({ dataName, data }));
    } catch (error) {
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
    getFavs,
    getComments,
    postComments,
    getCurrentData,
    delBlog,
    updateBlog,
    getUserBlogs,
  };
};
export default useBlogs;
