import React, { useEffect } from "react";
import { ColorProvider } from "Lib";

import {
  ABOUTUS_URL,
  ADDETAILLIVE_URL,
  ADDETAILPENDING_URL,
  ADSLISTING_URL,
  ADVERTISINGSALE_URL,
  BUYERFIRSTPAGE_URL,
  BUYERCHECKOUT_URL,
  BUYERFINAL_URL,
  CHECKOUT_URL,
  CROWDFUNDDETAILLIVE_URL,
  CROWDFUNDDETAILLIVEMENU_URL,
  CROWDFUNDDETAILPENDING_URL,
  CROWDFUNDINGLIST_URL,
  CROWDFUNDINGDONATE_URL,
  DONATIONVIEW_URL,
  EXPLORE_URL,
  FEES_URL,
  FORGOTPASSWORD_URL,
  HOME_URL,
  HOWITWORKS_URL,
  INDIVIDUALADVERTISING_URL,
  INDIVIDUALFUNDRAISER_URL,
  INDIVIDUALSPONSORSHIP_URL,
  LISTINGAPPROVAL_URL,
  MAKEAWITHDRAWAL_URL,
  MYACCOUNT_URL,
  EDITMYACCOUNT_URL,
  ORGANISATIONADVERTISING_URL,
  ORGANISATIONFUNDRAISER_URL,
  ORGANISATIONSPONSORSHIP_URL,
  PITCHSIDEADBOARD_URL,
  PROFILEPAGE_URL,
  PROFILEEDIT_URL,
  INDIVIDUALPROFILEPAGE_URL,
  SPONSORPROFILEPAGE_URL,
  PROMOTE_URL,
  SELLERFIRSTPAGE_URL,
  SELLERFINAL_URL,
  SIGNIN_URL,
  SIGNUP_URL,
  SPONSORSHIPLISTING_URL,
  SPONSORSHIPDETAILLIVE_URL,
  SPONSORSHIPDETAILPENDING_URL,
  SPONSORSHIPSALE_URL,
  SUPPORT_URL,
  SUPPORTERVIEW_URL,
  UPDATEPASSWORD_URL,
  COOKIE_URL,
  FRAUDPOLICY_URL,
  PRIVACYPOLICY_URL,
  QUESTIONS_URL,
  TERMS_URL,
  WITHDRAWALAPPROVAL_URL,
} from "Lib";

import {
  AboutUs,
  AdDetailLivePage,
  AdDetailPendingPage,
  AdsList,
  AdvertisingSale,
  BuyerCheckoutPage,
  BuyerFinalPage,
  BuyerFirstPage,
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
  ListingApproval,
  MakeWithdrawal,
  MyAccountPage,
  OrganisationFundraiser,
  OrganisationListing,
  OrganisationSponsorship,
  PitchSideAdBoard,
  ProfilePage,
  EditProfile,
  IndividualProfilePage,
  SponsorProfilePage,
  Promote,
  SellerFirstPage,
  SellerFinalPage,
  Signin,
  SignUp,
  SponsorshipList,
  SponsorshipDetailLivePage,
  SponsorshipDetailPendingPage,
  SponsorshipSale,
  Support,
  SupporterView,
  UpdatePassword,
  CookiePage,
  FraudPrivacyPage,
  QuestionsPage,
  PrivacyPolicyPage,
  TermsPage,
  WithdrawalApproval,
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
      <ColorProvider>
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
            <Route path={MAKEAWITHDRAWAL_URL} element={<MakeWithdrawal />} />
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
            <Route
              path={ADDETAILPENDING_URL}
              element={<AdDetailPendingPage />}
            />
            <Route path={ADVERTISINGSALE_URL} element={<AdvertisingSale />} />
            <Route
              path={ORGANISATIONSPONSORSHIP_URL}
              element={<OrganisationSponsorship />}
            />
            <Route
              path={INDIVIDUALSPONSORSHIP_URL}
              element={<IndividualSponsorship />}
            />
            <Route
              path={SPONSORSHIPLISTING_URL}
              element={<SponsorshipList />}
            />
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
            <Route path={UPDATEPASSWORD_URL} element={<UpdatePassword />} />
            <Route path={PITCHSIDEADBOARD_URL} element={<PitchSideAdBoard />} />
            <Route path={BUYERFIRSTPAGE_URL} element={<BuyerFirstPage />} />
            <Route path={BUYERCHECKOUT_URL} element={<BuyerCheckoutPage />} />
            <Route path={BUYERFINAL_URL} element={<BuyerFinalPage />} />
            <Route path={SELLERFIRSTPAGE_URL} element={<SellerFirstPage />} />
            <Route path={SELLERFINAL_URL} element={<SellerFinalPage />} />
            <Route path={PROFILEPAGE_URL} element={<ProfilePage />} />
            <Route path={PROFILEEDIT_URL} element={<EditProfile />} />
            <Route
              path={INDIVIDUALPROFILEPAGE_URL}
              element={<IndividualProfilePage />}
            />
            <Route
              path={SPONSORPROFILEPAGE_URL}
              element={<SponsorProfilePage />}
            />
            <Route path={COOKIE_URL} element={<CookiePage />} />
            <Route path={FRAUDPOLICY_URL} element={<FraudPrivacyPage />} />
            <Route path={QUESTIONS_URL} element={<QuestionsPage />} />
            <Route path={PRIVACYPOLICY_URL} element={<PrivacyPolicyPage />} />
            <Route path={TERMS_URL} element={<TermsPage />} />
            <Route path={LISTINGAPPROVAL_URL} element={<ListingApproval />} />
            <Route
              path={WITHDRAWALAPPROVAL_URL}
              element={<WithdrawalApproval />}
            />
            <Route path="*" element={<RedirectToRoot />} />
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </ColorProvider>
    </>
  );
}

export default App;
