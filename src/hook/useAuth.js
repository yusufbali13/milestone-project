import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastifySuccess, toastifyError } from "../helper/Toastify";
import {
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (formValue) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/auth/login/`,
        formValue
      );
      console.log(data);
      dispatch(loginSuccess(data));
      navigate("/");
      toastifySuccess("You have successfully logged in");
    } catch (error) {
      toastifyError(
        "You have not successfully logged in. Check your login information."
      );
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/users/auth/logout/`);

      dispatch(logoutSuccess());

      toastifySuccess("You have successfully logged out.");
      navigate("/login");
    } catch (error) {
      toastifyError("You have not successfully logged out.");
    }
  };

  const register = async (formValue) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register/`,
        formValue
      );
      toastifySuccess("You have successfully registered.");
      dispatch(registerSuccess(data));
      navigate("/login");
    } catch (error) {
      toastifyError(
        "You have not successfully registered. Check your login information."
      );
    }
  };

  return { register, logout, login };
};

export default useAuth;
