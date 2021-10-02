import "./App.css";
import HeaderComponent from "./Components/Header/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className="bgGround">
        <HeaderComponent />
        <Home />
      </div>
    </>
  );
}

export default App;
