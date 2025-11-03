import React from "react";
import Home from "./pages/Home";
import RegisterProduct from "./pages/RegisterProduct";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/registerProduct" element={<RegisterProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;