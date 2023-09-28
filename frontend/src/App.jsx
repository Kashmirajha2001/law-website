import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Community from "./components/CommunitySection/Community";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Community" element={<Community/>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </>
  );
}

export default App;
