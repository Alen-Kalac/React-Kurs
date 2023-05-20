import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import React from "react";
import About from "./About/About";
import Header from "./Header/Header";



function App() {
  return (
    <>
<Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<About />} />
</Routes>
    </>
  );
}

export default App;
