import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbard from "./components/parts/Navbard";
import Home from "./components/pages/Home";
import Footer from "./components/parts/Footer";
import { Route, Routes } from "react-router-dom";
import Actualite from "./components/pages/Actualite";

function App() {
  return (
    <>
      <Navbard />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actualite" element={<Actualite />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
