import React from "react";
import {
  IndividualListingStepFirst,
  IndividualListingStepSecond,
  IndividualListingStepThird,
  IndividualListingStepFourth,
  IndividualListingStepFiveth,
  IndividualListingEmailConfirm,
  IndividualListingEmailSuccess,
  IndividualListingFinalPage,
} from "Pages";
import { Stepper } from "UI";

export const IndividualListing: React.FC = () => {
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "IndividualListingStepFirst",
      component: <IndividualListingStepFirst />,
    },
    {
      name: "IndividualListingStepSecond",
      component: <IndividualListingStepSecond />,
    },
    {
      name: "EmailConfirmPage",
      component: <IndividualListingEmailConfirm />,
    },
    {
      name: "EmailSuccessPage",
      component: <IndividualListingEmailSuccess />,
    },
    {
      name: "IndividualListingStepThird",
      component: <IndividualListingStepThird />,
    },
    {
      name: "IndividualListingStepFourth",
      component: <IndividualListingStepFourth />,
    },

    {
      name: "IndividualListingStepFiveth",
      component: <IndividualListingStepFiveth />,
    },
    {
      name: "IndividualListingFinalPage",
      component: <IndividualListingFinalPage />,
    },
  ];

  const ContinueButtonText = [
    "Continue",
    "Continue",
    "Resend email",
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
