import "./App.css";
import HeaderComponent from "./Components/Header/Header";
import Home from "./Pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="bgGround">
        <HeaderComponent />
        <ToastContainer autoClose={3000} />
        <Home />
      </div>
    </>
  );
}

export default App;
