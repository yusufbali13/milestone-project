import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NavBars from "../components/NavBars";
import Footers from "../components/Footers";
import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBars />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footers />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
