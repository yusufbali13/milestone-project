import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
import MyBlogs from "../pages/MyBlogs";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route element={<PrivateRouter />}>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/newblog" element={<NewBlog />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myBlogs" element={<MyBlogs />} />
      </Routes>
    </>
  );
};

export default AppRouter;
