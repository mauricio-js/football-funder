import React from "react";
import { Landing, Home, Explore, Description, CreateFundraiser } from "Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="howitworks" element={<Description />} />
          <Route path="createfundraiser" element={<CreateFundraiser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
