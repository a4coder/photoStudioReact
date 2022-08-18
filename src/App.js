import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// componets
import Nav from "./common/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Works from "./pages/Works";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="allPage-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
