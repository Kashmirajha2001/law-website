// import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';
import Community from './components/Community/Community';
import Attorneys from './components/Attorneys/Attorneys';
import LegalProfile from './components/LegalProfile/LegalProfile';
import Contact from './components/Contact/Contact';
import CommunityChat from './components/Community/CommunityChat';
import ScrollToTop from './ScrollToTop'
import Expert from "./components/Dashboard/Expert";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/About" element={<About />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Attorneys" element={<Attorneys />} />
          <Route path="/LegalProfile" element={<LegalProfile />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CommunityChat" element={<CommunityChat />} />
          <Route path="/dashboard" element={<Expert />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
