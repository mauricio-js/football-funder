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
  const pages = [
    <IndividualFundraiserSignInStepFirst />,
    <IndividualFundraiserSignInStepSecond />,
    <IndividualFundraiserStepFirst />,
    <IndividualFundraiserStepSecond />,
    <IndividualFundraiserStepThird />,
    <IndividualFundraiserStepFourth />,
    <IndividualFundraiserStepFiveth />,
    <IndividualFundraiserStepSixth />,
    <IndividualFundraiserFinalPage />,
  ];
  return (
    <div>
      <Stepper pages={pages} />
    </div>
  );
};
