import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/HomePage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <>
    <Menu />
    </>
  )
}

export default App;