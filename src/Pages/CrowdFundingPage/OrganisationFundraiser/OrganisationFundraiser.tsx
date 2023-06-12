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
  const pages = [
    <OrganisationFundraiserSignInStepFirst />,
    <OrganisationFundraiserSignInStepSecond />,
    <OrganisationFundraiserStepFirst />,
    <OrganisationFundraiserStepSecond />,
    <OrganisationFundraiserStepThird />,
    <OrganisationFundraiserStepFourth />,
    <OrganisationFundraiserStepFiveth />,
    <OrganisationFundraiserStepSixth />,
    <OrganisationFundraiserStepSeventh />,
    <OrganisationFundraiserFinalPage />,
  ];

  return (
    <div>
      <Stepper pages={pages} />
    </div>
  );
};
