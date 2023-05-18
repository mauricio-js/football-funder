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
          <Route path={"/"} Component={Landing} />
          <Route path={"/home"} Component={Home} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
