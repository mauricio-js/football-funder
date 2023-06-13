import React from "react";
import {
  OrganisationFundraiserSignInStepFirst,
  OrganisationFundraiserSignInStepSecond,
  OrganisationFundraiserStepFirst,
  OrganisationFundraiserStepSecond,
  OrganisationFundraiserStepThird,
  OrganisationFundraiserStepFourth,
  OrganisationFundraiserStepFiveth,
  OrganisationFundraiserStepSixth,
  OrganisationFundraiserStepSeventh,
  OrganisationFundraiserFinalPage,
} from "Pages";
import { Stepper } from "UI";

export const OrganisationFundraiser: React.FC = () => {
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "OrganisationFundraiserSignInStepFirst",
      component: <OrganisationFundraiserSignInStepFirst />,
    },
    {
      name: "OrganisationFundraiserSignInStepSecond",
      component: <OrganisationFundraiserSignInStepSecond />,
    },
    {
      name: "OrganisationFundraiserStepFirst",
      component: <OrganisationFundraiserStepFirst />,
    },
    {
      name: "OrganisationFundraiserStepSecond",
      component: <OrganisationFundraiserStepSecond />,
    },
    {
      name: "OrganisationFundraiserStepThird",
      component: <OrganisationFundraiserStepThird />,
    },
    {
      name: "OrganisationFundraiserStepFourth",
      component: <OrganisationFundraiserStepFourth />,
    },
    {
      name: "OrganisationFundraiserStepFiveth",
      component: <OrganisationFundraiserStepFiveth />,
    },
    {
      name: "OrganisationFundraiserStepSixth",
      component: <OrganisationFundraiserStepSixth />,
    },
    {
      name: "OrganisationFundraiserStepSeventh",
      component: <OrganisationFundraiserStepSeventh />,
    },
    {
      name: "OrganisationFundraiserFinalPage",
      component: <OrganisationFundraiserFinalPage />,
    },
  ];

  const ContinueButtonText = [
    "Continue",
    "Continue",
    "Continue",
    "Continue",
    "Continue",
    "Continue",
    "Save Reward",
    "Continue",
    "Submit Fundraiser",
  ];

  return (
    <div>
      <Stepper pages={pages} buttonText={ContinueButtonText} />
    </div>
  );
};
