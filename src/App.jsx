import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/authContext";
import { BrowserRouter } from "react-router-dom";
import NavBars from "../components/NavBars";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <NavBars />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </Provider>
    </AuthContextProvider>
  );
}

export default App;
