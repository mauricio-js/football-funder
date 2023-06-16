import React from "react";
import {
  IndividualSponsorshipEmailConfirm,
  IndividualSponsorshipEmailSuccess,
  IndividualSponsorshipStepFirst,
  IndividualSponsorshipStepSecond,
  IndividualSponsorshipStepThird,
  IndividualSponsorshipStepFourth,
  IndividualSponsorshipStepFiveth,
  IndividualSponsorshipFinalPage,
} from "Pages";
import { Stepper } from "UI";

export const IndividualSponsorship: React.FC = () => {
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "IndividualSponsorshipStepFirst",
      component: <IndividualSponsorshipStepFirst />,
    },
    {
      name: "IndividualSponsorshipStepSecond",
      component: <IndividualSponsorshipStepSecond />,
    },
    {
      name: "EmailConfirmPage",
      component: <IndividualSponsorshipEmailConfirm />,
    },
    {
      name: "EmailSuccessPage",
      component: <IndividualSponsorshipEmailSuccess />,
    },
    {
      name: "IndividualAdvertisingStepThird",
      component: <IndividualSponsorshipStepThird />,
    },
    {
      name: "IndividualAdvertisingStepFourth",
      component: <IndividualSponsorshipStepFourth />,
    },
    {
      name: "IndividualAdvertisingStepFiveth",
      component: <IndividualSponsorshipStepFiveth />,
    },
    {
      name: "IndividualAdvertisingFinalPage",
      component: <IndividualSponsorshipFinalPage />,
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
