import React from "react";
import {
  IndividualFundraiserSignInStepFirst,
  IndividualFundraiserSignInStepSecond,
  IndividualFundraiserStepFirst,
  IndividualFundraiserStepSecond,
  IndividualFundraiserStepThird,
  IndividualFundraiserStepFourth,
  IndividualFundraiserStepFiveth,
  IndividualFundraiserStepSixth,
  IndividualFundraiserFinalPage,
} from "Pages";
import { Stepper } from "UI";

export const IndividualFundraiser: React.FC = () => {
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "IndividualFundraiserSignInStepFirst",
      component: <IndividualFundraiserSignInStepFirst />,
    },
    {
      name: "IndividualFundraiserSignInStepSecond",
      component: <IndividualFundraiserSignInStepSecond />,
    },
    {
      name: "IndividualFundraiserStepFirst",
      component: <IndividualFundraiserStepFirst />,
    },
    {
      name: "IndividualFundraiserStepSecond",
      component: <IndividualFundraiserStepSecond />,
    },
    {
      name: "IndividualFundraiserStepThird",
      component: <IndividualFundraiserStepThird />,
    },
    {
      name: "IndividualFundraiserStepFourth",
      component: <IndividualFundraiserStepFourth />,
    },
    {
      name: "IndividualFundraiserStepFiveth",
      component: <IndividualFundraiserStepFiveth />,
    },
    {
      name: "IndividualFundraiserStepSixth",
      component: <IndividualFundraiserStepSixth />,
    },
    {
      name: "IndividualFundraiserFinalPage",
      component: <IndividualFundraiserFinalPage />,
    },
  ];

  const ContinueButtonText = [
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
