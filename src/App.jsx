import { useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SyncPanel from "./components/Syncpanel";
import WorkPanel from "./components/WorkPanel";

function App() {
  return (
    <div>
      <Navbar/>

      <Router>
        <Routes>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/welcomepage" element={<WelcomePage/>} />
          <Route path="/syncpanel" element={<SyncPanel/>} />
          <Route path="/workpanel" element={<WorkPanel/>} />
        </Routes>
      </Router>
     

      <Footer/>
    </div>
  );
}

export default App;
