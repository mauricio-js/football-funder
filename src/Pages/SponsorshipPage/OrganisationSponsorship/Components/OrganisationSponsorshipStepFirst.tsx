import React from "react";
import { CategoryAndNationPage } from "UI";

export const OrganisationSponsorshipStepFirst = () => {
  return (
    <div>
      <CategoryAndNationPage
        isOrganisation={true}
        pageTitle="Create your listing"
      />
    </div>
  );
};
