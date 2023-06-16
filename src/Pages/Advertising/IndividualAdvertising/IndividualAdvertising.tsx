import React from "react";
import {
  IndividualAdvertisingStepFirst,
  IndividualAdvertisingStepSecond,
  IndividualAdvertisingStepThird,
  IndividualAdvertisingStepFourth,
  IndividualAdvertisingStepFiveth,
  IndividualAdvertisingEmailConfirm,
  IndividualAdvertisingEmailSuccess,
  IndividualAdvertisingFinalPage,
} from "Pages";
import { Stepper } from "UI";

export const IndividualListing: React.FC = () => {
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "IndividualAdvertisingStepFirst",
      component: <IndividualAdvertisingStepFirst />,
    },
    {
      name: "IndividualAdvertisingStepSecond",
      component: <IndividualAdvertisingStepSecond />,
    },
    {
      name: "EmailConfirmPage",
      component: <IndividualAdvertisingEmailConfirm />,
    },
    {
      name: "EmailSuccessPage",
      component: <IndividualAdvertisingEmailSuccess />,
    },
    {
      name: "IndividualAdvertisingStepThird",
      component: <IndividualAdvertisingStepThird />,
    },
    {
      name: "IndividualAdvertisingStepFourth",
      component: <IndividualAdvertisingStepFourth />,
    },

    {
      name: "IndividualAdvertisingStepFiveth",
      component: <IndividualAdvertisingStepFiveth />,
    },
    {
      name: "IndividualAdvertisingFinalPage",
      component: <IndividualAdvertisingFinalPage />,
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
