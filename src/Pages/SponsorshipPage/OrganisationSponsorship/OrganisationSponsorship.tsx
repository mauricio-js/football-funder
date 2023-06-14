import React from "react";
import {
  OrganisationSponsorshipEmailConfirm,
  OrganisationSponsorshipEmailSuccess,
  OrganisationSponsorshipStepFirst,
  OrganisationSponsorshipStepSecond,
  OrganisationSponsorshipStepThird,
  OrganisationSponsorshipStepFourth,
  OrganisationSponsorshipStepFiveth,
  OrganisationSponsorshipStepSixth,
  OrganisationSponsorshipFinalPage,
} from "Pages";
import { Stepper } from "UI";

export const OrganisationSponsorship: React.FC = () => {
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "OrganisationSponsorshipStepFirst",
      component: <OrganisationSponsorshipStepFirst />,
    },
    {
      name: "OrganisationSponsorshipStepSecond",
      component: <OrganisationSponsorshipStepSecond />,
    },
    {
      name: "EmailConfirmPage",
      component: <OrganisationSponsorshipEmailConfirm />,
    },
    {
      name: "EmailSuccessPage",
      component: <OrganisationSponsorshipEmailSuccess />,
    },
    {
      name: "OrganisationAdvertisingStepThird",
      component: <OrganisationSponsorshipStepThird />,
    },
    {
      name: "OrganisationAdvertisingStepFourth",
      component: <OrganisationSponsorshipStepFourth />,
    },
    {
      name: "OrganisationAdvertisingStepFiveth",
      component: <OrganisationSponsorshipStepFiveth />,
    },
    {
      name: "OrganisationAdvertisingStepSixth",
      component: <OrganisationSponsorshipStepSixth />,
    },
    {
      name: "OrganisationAdvertisingFinalPage",
      component: <OrganisationSponsorshipFinalPage />,
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
