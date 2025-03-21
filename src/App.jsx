import { useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import LinkerBourd from "./components/LinkerBourd";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div>
      <Navbar/>

      <Router>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/welcomepage" element={<WelcomePage/>} />
          <Route path="/linkerboard" element={<LinkerBourd/>} />
        </Routes>
      </Router>
     

      <Footer/>
    </div>
  );
}

export default App;
