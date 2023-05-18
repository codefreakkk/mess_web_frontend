import React from "react";
import Home from "./pages/Home";
import "./utilities/style.css";
import Addusers from "./pages/Addusers";
import Viewusers from "./pages/Viewusers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/signin" element={<Login/>} />
        </Routes>
        <Routes>
          <Route path="/addusers" element={<Addusers />} />
        </Routes>
        <Routes>
          <Route path="/viewusers" element={<Viewusers />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
