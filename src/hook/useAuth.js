import axios from "axios";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { toastifySuccess, toastifyError } from "../helper/Toastify";
const useAuth = () => {
  const baseURL = "https://33468.fullstack.clarusway.com";
  const { setUserData, userData } = useAuthContext();
  const navigate = useNavigate();

  const signin = async (formValue) => {
    try {
      const { data } = await axios.post(
        `${baseURL}/users/auth/login/`,
        formValue
      );
      setUserData(data);
      navigate(-1);
      toastifySuccess("You have successfully logged in");
    } catch (error) {
      toastifyError(
        "You have not successfully logged in. Check your login information."
      );
    }
  };
  const logout = async () => {
    try {
      await axios.post(`${baseURL}/users/auth/logout/`);
      setUserData({});
      toastifySuccess("You have successfully logged out.");
    } catch (error) {
      toastifySuccess("You have not successfully logged out.");
    }
  };

  const signup = async (formValue) => {
    try {
      const { data } = await axios.post(
        `${baseURL}/users/register/`,
        formValue
      );
      toastifySuccess("You have successfully registered.");
      setUserData(data);
      navigate("/login");
    } catch (error) {
      toastifyError(
        "You have not successfully registered. Check your login information."
      );
    }
  };

  return { signin, signup, logout };
};

export default useAuth;
