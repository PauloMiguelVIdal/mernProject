import React from "react";
import Home from "./pages/Home";
import RegisterProduct from "./pages/RegisterProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/registrar-produto" element={<RegisterProduct />} />
        <Route path="/cadastrar" element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;