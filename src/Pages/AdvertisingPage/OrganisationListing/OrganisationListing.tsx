import React from "react";
import {
  OrganisationListingEmailConfirm,
  OrganisationListingEmailSuccess,
  OrganisationListingStepFirst,
  OrganisationListingStepSecond,
  OrganisationListingStepThird,
  OrganisationListingStepFourth,
  OrganisationListingStepFiveth,
  OrganisationListingStepSixth,
  OrganisationListingFinalPage,
} from "Pages";
import { Stepper } from "UI";

export const OrganisationListing: React.FC = () => {
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "OrganisationListingStepFirst",
      component: <OrganisationListingStepFirst />,
    },
    {
      name: "OrganisationListingStepSecond",
      component: <OrganisationListingStepSecond />,
    },
    {
      name: "EmailConfirmPage",
      component: <OrganisationListingEmailConfirm />,
    },
    {
      name: "EmailSuccessPage",
      component: <OrganisationListingEmailSuccess />,
    },
    {
      name: "OrganisationListingStepThird",
      component: <OrganisationListingStepThird />,
    },
    {
      name: "OrganisationListingStepFourth",
      component: <OrganisationListingStepFourth />,
    },
    {
      name: "OrganisationListingStepFiveth",
      component: <OrganisationListingStepFiveth />,
    },
    {
      name: "OrganisationListingStepSixth",
      component: <OrganisationListingStepSixth />,
    },
    {
      name: "OrganisationListingFinalPage",
      component: <OrganisationListingFinalPage />,
    },
  ];

  const ContinueButtonText = [
    "Continue",
    "Continue",
    "Resend email",
    "Continue",
    "Continue",
    "Continue",
    "Continue",
    "Post listing",
  ];

  return (
    <div>
      <Stepper pages={pages} buttonText={ContinueButtonText} />
    </div>
  );
};
