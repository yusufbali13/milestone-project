import { getBlogSuccess, fetchFail, fetchStart } from "../features/blogSlice";

import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();

  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/api/${url}/`);
      dispatch(getBlogSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return {
    getBlogData,
  };
};

export default useBlogCall;
