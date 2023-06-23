import React, { useEffect } from "react";
import {
  ABOUTUS_URL,
  ADDETAILLIVE_URL,
  ADDETAILPENDING_URL,
  ADSLISTING_URL,
  ADVERTISINGSALE_URL,
  FORGOTPASSWORD_URL,
  CHECKOUT_URL,
  CROWDFUNDDETAILLIVE_URL,
  CROWDFUNDDETAILLIVEMENU_URL,
  CROWDFUNDDETAILPENDING_URL,
  CROWDFUNDINGLIST_URL,
  CROWDFUNDINGDONATE_URL,
  EXPLORE_URL,
  FEES_URL,
  HOME_URL,
  HOWITWORKS_URL,
  INDIVIDUALADVERTISING_URL,
  INDIVIDUALFUNDRAISER_URL,
  INDIVIDUALSPONSORSHIP_URL,
  MYACCOUNT_URL,
  EDITMYACCOUNT_URL,
  ORGANISATIONADVERTISING_URL,
  ORGANISATIONFUNDRAISER_URL,
  ORGANISATIONSPONSORSHIP_URL,
  PROMOTE_URL,
  SIGNIN_URL,
  SIGNUP_URL,
  SPONSORSHIPLISTING_URL,
  SPONSORSHIPDETAILLIVE_URL,
  SPONSORSHIPDETAILPENDING_URL,
  SPONSORSHIPSALE_URL,
  SUPPORT_URL,
  SUPPORTERVIEW_URL,
  DONATIONVIEW_URL,
} from "Lib";
import {
  AboutUs,
  AdDetailLivePage,
  AdDetailPendingPage,
  AdsList,
  AdvertisingSale,
  Checkout,
  CrowdFundDetailLivePage,
  CrowdFundDetailLiveMenuPage,
  CrowdFundDetailPendingPage,
  CrowdfundingDonate,
  CrowdfundingList,
  DonationView,
  EditMyAccount,
  Explore,
  Fees,
  ForgotPassword,
  Home,
  HowItWorks,
  IndividualFundraiser,
  IndividualListing,
  IndividualSponsorship,
  Landing,
  MyAccountPage,
  OrganisationFundraiser,
  OrganisationListing,
  OrganisationSponsorship,
  Promote,
  Signin,
  SignUp,
  SponsorshipList,
  SponsorshipDetailLivePage,
  SponsorshipDetailPendingPage,
  SponsorshipSale,
  Support,
  SupporterView,
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
      navigate("/home");
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
          <Route
            path={CROWDFUNDDETAILLIVEMENU_URL}
            element={<CrowdFundDetailLiveMenuPage />}
          />
          <Route
            path={CROWDFUNDDETAILLIVE_URL}
            element={<CrowdFundDetailLivePage />}
          />
          <Route
            path={CROWDFUNDDETAILPENDING_URL}
            element={<CrowdFundDetailPendingPage />}
          />
          <Route />
          <Route
            path={CROWDFUNDINGDONATE_URL}
            element={<CrowdfundingDonate />}
          />
          <Route
            path={ORGANISATIONADVERTISING_URL}
            element={<OrganisationListing />}
          />
          <Route
            path={INDIVIDUALADVERTISING_URL}
            element={<IndividualListing />}
          />
          <Route path={ADSLISTING_URL} element={<AdsList />} />
          <Route path={ADDETAILLIVE_URL} element={<AdDetailLivePage />} />
          <Route path={ADDETAILPENDING_URL} element={<AdDetailPendingPage />} />
          <Route path={ADVERTISINGSALE_URL} element={<AdvertisingSale />} />
          <Route
            path={ORGANISATIONSPONSORSHIP_URL}
            element={<OrganisationSponsorship />}
          />
          <Route
            path={INDIVIDUALSPONSORSHIP_URL}
            element={<IndividualSponsorship />}
          />
          <Route path={SPONSORSHIPLISTING_URL} element={<SponsorshipList />} />
          <Route
            path={SPONSORSHIPDETAILLIVE_URL}
            element={<SponsorshipDetailLivePage />}
          />
          <Route
            path={SPONSORSHIPDETAILPENDING_URL}
            element={<SponsorshipDetailPendingPage />}
          />
          <Route path={SPONSORSHIPSALE_URL} element={<SponsorshipSale />} />
          <Route path={PROMOTE_URL} element={<Promote />} />
          <Route path={CHECKOUT_URL} element={<Checkout />} />
          <Route path={SIGNIN_URL} element={<Signin />} />
          <Route path={SIGNUP_URL} element={<SignUp />} />
          <Route path={FORGOTPASSWORD_URL} element={<ForgotPassword />} />
          <Route path={FEES_URL} element={<Fees />} />
          <Route path={ABOUTUS_URL} element={<AboutUs />} />
          <Route path={SUPPORT_URL} element={<Support />} />
          <Route path={SUPPORTERVIEW_URL} element={<SupporterView />} />
          <Route path={DONATIONVIEW_URL} element={<DonationView />} />
          <Route path={MYACCOUNT_URL} element={<MyAccountPage />} />
          <Route path={EDITMYACCOUNT_URL} element={<EditMyAccount />} />
          <Route path="*" element={<RedirectToRoot />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
