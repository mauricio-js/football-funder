import React from "react";
import { Landing, Home, Explore, HowItWorks, CreateFundraiser } from "Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="howitworks" element={<HowItWorks />} />
          <Route path="createfundraiser" element={<CreateFundraiser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
