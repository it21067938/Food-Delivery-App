import React from "react";
import Navbar from "./component/navbar/Navbar";
import SlideBar from "./component/slideBar/SlideBar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/add/Add";
import Order from "./pages/order/Order";
import List from "./pages/list/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <SlideBar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/order" element={<Order />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
