import React from "react";
import {
  OrganisationAdvertisingEmailConfirm,
  OrganisationAdvertisingEmailSuccess,
  OrganisationAdvertisingStepFirst,
  OrganisationAdvertisingStepSecond,
  OrganisationAdvertisingStepThird,
  OrganisationAdvertisingStepFourth,
  OrganisationAdvertisingStepFiveth,
  OrganisationAdvertisingStepSixth,
  OrganisationAdvertisingFinalPage,
} from "Pages";
import { Stepper } from "UI";

export const OrganisationListing: React.FC = () => {
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "OrganisationAdvertisingStepFirst",
      component: <OrganisationAdvertisingStepFirst />,
    },
    {
      name: "OrganisationAdvertisingStepSecond",
      component: <OrganisationAdvertisingStepSecond />,
    },
    {
      name: "EmailConfirmPage",
      component: <OrganisationAdvertisingEmailConfirm />,
    },
    {
      name: "EmailSuccessPage",
      component: <OrganisationAdvertisingEmailSuccess />,
    },
    {
      name: "OrganisationAdvertisingStepThird",
      component: <OrganisationAdvertisingStepThird />,
    },
    {
      name: "OrganisationAdvertisingStepFourth",
      component: <OrganisationAdvertisingStepFourth />,
    },
    {
      name: "OrganisationAdvertisingStepFiveth",
      component: <OrganisationAdvertisingStepFiveth />,
    },
    {
      name: "OrganisationAdvertisingStepSixth",
      component: <OrganisationAdvertisingStepSixth />,
    },
    {
      name: "OrganisationAdvertisingFinalPage",
      component: <OrganisationAdvertisingFinalPage />,
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
