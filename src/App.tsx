import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbard from "./components/parts/Navbard";
import Home from "./components/pages/Home";
import Footer from "./components/parts/Footer";
import { Route, Routes } from "react-router-dom";
import Actualite from "./components/pages/Actualite";
import Formation from "./components/pages/Formation";

function App() {
  return (
    <>
      <Navbard />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/formation" element={<Formation />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
