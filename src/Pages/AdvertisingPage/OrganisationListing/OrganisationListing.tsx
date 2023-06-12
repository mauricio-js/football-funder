import React from "react";
import {
  EmailConfirmPage,
  EmailSuccessPage,
  OrganisationListingStepFirst,
  OrganisationListingStepSecond,
  OrganisationListingStepThird,
  OrganisationListingStepFourth,
} from "Pages";
import { Stepper } from "UI";

export const OrganisationListing: React.FC = () => {
  const pages = [
    <OrganisationListingStepFirst />,
    <OrganisationListingStepSecond />,
    <EmailConfirmPage />,
    <EmailSuccessPage />,
    <OrganisationListingStepThird />,
    <OrganisationListingStepFourth />,
  ];

  return (
    <div>
      <Stepper pages={pages} />
    </div>
  );
};
