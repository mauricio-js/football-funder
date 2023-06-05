import React from "react";
import {
  Landing,
  Home,
  Explore,
  HowItWorks,
  CreateFundraiserSignIn,
  CreateFundraiserStepFirst,
  CreateFundraiserStepSecond,
  CreateFundraiserStepThird,
  CreateListingSignIn,
} from "Pages";
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
          <Route
            path="createfundraisersignin"
            element={<CreateFundraiserSignIn />}
          />
          <Route path="createlistingsignin" element={<CreateListingSignIn />} />
          <Route
            path="createfundraiserstepfirst"
            element={<CreateFundraiserStepFirst />}
          />
          <Route
            path="createfundraiserstepsecond"
            element={<CreateFundraiserStepSecond />}
          />
          <Route
            path="createfundraiserstepthird"
            element={<CreateFundraiserStepThird />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
