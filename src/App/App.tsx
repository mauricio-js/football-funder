import React, { useEffect } from "react";
import {
  ADSLISTING_URL,
  FORGOTPASSWORD_URL,
  HOME_URL,
  EXPLORE_URL,
  CROWDFUNDINGLIST_URL,
  HOWITWORKS_URL,
  ORGANISATIONFUNDRAISER_URL,
  INDIVIDUALFUNDRAISER_URL,
  ORGANISATIONADVERTISING_URL,
  ORGANISATIONSPONSORSHIP_URL,
  INDIVIDUALADVERTISING_URL,
  INDIVIDUALSPONSORSHIP_URL,
  SIGNIN_URL,
  SIGNUP_URL,
  SPONSORSHIPLISTING_URL,
  PROMOTE_URL,
  CHECKOUT_URL,
} from "Lib";
import {
  AdsList,
  Checkout,
  CrowdfundingList,
  Explore,
  ForgotPassword,
  Home,
  HowItWorks,
  IndividualFundraiser,
  IndividualListing,
  IndividualSponsorship,
  Landing,
  OrganisationFundraiser,
  OrganisationListing,
  OrganisationSponsorship,
  Promote,
  SigninPage,
  SignUp,
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
            path={ORGANISATIONADVERTISING_URL}
            element={<OrganisationListing />}
          />
          <Route
            path={INDIVIDUALADVERTISING_URL}
            element={<IndividualListing />}
          />
          <Route
            path={ORGANISATIONSPONSORSHIP_URL}
            element={<OrganisationSponsorship />}
          />
          <Route
            path={INDIVIDUALSPONSORSHIP_URL}
            element={<IndividualSponsorship />}
          />
          <Route path={SPONSORSHIPLISTING_URL} element={<SponsorshipList />} />
          <Route path={PROMOTE_URL} element={<Promote />} />
          <Route path={CHECKOUT_URL} element={<Checkout />} />
          <Route path={SIGNIN_URL} element={<SigninPage />} />
          <Route path={SIGNUP_URL} element={<SignUp />} />
          <Route path={SIGNUP_URL} element={<SignUp />} />
          <Route path={FORGOTPASSWORD_URL} element={<ForgotPassword />} />
          <Route path="*" element={<RedirectToRoot />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
