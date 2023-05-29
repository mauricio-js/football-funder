import React from "react";
import { Landing, Home, Explore, Description } from "Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="description" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
