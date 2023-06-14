import React, { useEffect } from "react";
import {
  ADSLISTING_URL,
  HOME_URL,
  EXPLORE_URL,
  CROWDFUNDINGLIST_URL,
  HOWITWORKS_URL,
  ORGANISATIONFUNDRAISER_URL,
  INDIVIDUALFUNDRAISER_URL,
  ORGANISATIONLISTING_URL,
  INDIVIDUALLISTING_URL,
  SPONSORSHIPLISTING_URL,
} from "Lib";
import {
  AdsList,
  CrowdfundingList,
  Explore,
  Home,
  HowItWorks,
  IndividualFundraiser,
  IndividualListing,
  Landing,
  OrganisationFundraiser,
  OrganisationListing,
  SponsorshipList,
} from "Pages";
import {
  BrowserRouter,
  useNavigate,
  useLocation,
  Route,
  Routes,
} from "react-router-dom";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
        <ScrollToTop />
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
            path={INDIVIDUALFUNDRAISER_URL}
            element={<IndividualFundraiser />}
          />
          <Route path={CROWDFUNDINGLIST_URL} element={<CrowdfundingList />} />
          <Route path={ADSLISTING_URL} element={<AdsList />} />
          <Route
            path={ORGANISATIONLISTING_URL}
            element={<OrganisationListing />}
          />
          <Route path={INDIVIDUALLISTING_URL} element={<IndividualListing />} />
          <Route path={SPONSORSHIPLISTING_URL} element={<SponsorshipList />} />
          <Route path="*" element={<RedirectToRoot />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
