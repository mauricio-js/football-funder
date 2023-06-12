import React, { useEffect } from "react";
import {
  ADSISTING_URL,
  HOME_URL,
  EXPLORE_URL,
  CROWDFUNDINGLIST_URL,
  HOWITWORKS_URL,
  ORGANISATIONFUNDRAISER_URL,
  ORGANISATIONINDIVIDUAL_URL,
  ORGANISATIONLISTING_URL,
} from "Lib";
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
          <Route path={HOME_URL} element={<Home />} />
          <Route path={EXPLORE_URL} element={<Explore />} />
          <Route path={HOWITWORKS_URL} element={<HowItWorks />} />
          <Route
            path={ORGANISATIONFUNDRAISER_URL}
            element={<OrganisationFundraiser />}
          />
          <Route
            path={ORGANISATIONINDIVIDUAL_URL}
            element={<IndividualFundraiser />}
          />
          <Route path={CROWDFUNDINGLIST_URL} element={<CrowdfundingList />} />
          <Route path={ADSISTING_URL} element={<AdsList />} />
          <Route
            path={ORGANISATIONLISTING_URL}
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
