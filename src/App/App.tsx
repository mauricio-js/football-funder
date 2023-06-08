import React, { useEffect } from "react";
import {
  Landing,
  Home,
  Explore,
  HowItWorks,
  IndividualFundraiser,
  OrganisationFundraiser,
} from "Pages";
import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";

function App() {
  const RedirectToRoot = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/");
    }, [navigate]);
    return null;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="howitworks" element={<HowItWorks />} />
          <Route
            path="/crowdfunding/startafundraiser/organisation"
            element={<OrganisationFundraiser />}
          />
          <Route
            path="/crowdfunding/startafundraiser/individual"
            element={<IndividualFundraiser />}
          />
          <Route path="*" element={<RedirectToRoot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
