import React from "react";
import Home from "./pages/Home";
import "./utilities/style.css";
import Addusers from "./pages/Addusers";
import Viewusers from "./pages/Viewusers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
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
