import React, { useEffect } from "react";
import {
  AdsList,
  CrowdfundingList,
  Explore,
  Home,
  HowItWorks,
  IndividualFundraiser,
  Landing,
  OrganisationFundraiser,
  OrganisationListing,
  Sponsorship,
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
          <Route path="/crowdfunding/listings" element={<CrowdfundingList />} />
          <Route path="/AdsListing" element={<AdsList />} />
          <Route
            path="/advertising/createalistings/organisation"
            element={<OrganisationListing />}
          />
          <Route path="/Sponsorship" element={<Sponsorship />} />
          <Route path="*" element={<RedirectToRoot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
