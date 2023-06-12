import React from "react";
import {
  OrganisationListingStepFirst,
  OrganisationListingStepSecond,
} from "Pages";
import { Stepper } from "UI";

export const OrganisationListing: React.FC = () => {
  const pages = [
    <OrganisationListingStepFirst />,
    <OrganisationListingStepSecond />,
  ];

  return (
    <div>
      <Stepper pages={pages} />
    </div>
  );
};
