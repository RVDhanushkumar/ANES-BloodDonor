import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Register from "./components/register";
import BloodList from "./components/bloodlist";
import Footer from "./components/footer";
import AboutUs from "./components/about";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <h1 style={{display:"none"}}>hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/getAllData" element={<BloodList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;