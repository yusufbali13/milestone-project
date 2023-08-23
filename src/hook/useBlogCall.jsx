import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const getBlog = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/blog/${url}/`);
      dispatch(getStockSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return {
    getBlog,
  };
};

export default useBlogCall;
