import React from "react";
import { OrganisationListingStepFirst } from "Pages";
import { Stepper } from "UI";

export const OrganisationListing: React.FC = () => {
  const pages = [<OrganisationListingStepFirst />];

  return (
    <div>
      <Stepper pages={pages} />
    </div>
  );
};
