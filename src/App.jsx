import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBars from "./components/NavBars";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <NavBars />
          <AppRouter />
          <Footer />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
