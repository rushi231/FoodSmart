import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; 
import Pantry from "./Pantry"; 
import Favorites from "./Favorites";
import Recipes from "./Recipes";
import Home from "./Home";
 import FAQ from "./test";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/pantry" element={<Pantry />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/" element={<div className="page-content">Home Page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;