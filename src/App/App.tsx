import React from "react";
// import { Router } from './Router';
import { Landing, Home } from "Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Landing></Landing>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={Landing} />
          <Route path={"/home"} Component={Home} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
