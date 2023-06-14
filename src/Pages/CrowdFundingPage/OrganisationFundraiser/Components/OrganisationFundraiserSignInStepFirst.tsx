import React from "react";
import { CategoryAndNationPage } from "UI";

export const OrganisationFundraiserSignInStepFirst: React.FC = () => {
  return (
    <div>
      <CategoryAndNationPage
        isOrganisation={true}
        pageTitle="Create your fundraiser"
      />
    </div>
  );
};
