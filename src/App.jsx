import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1>SIMPLE CRUD OPERATION</h1>
      <Outlet></Outlet>
    </>
  );
}

export default App;
