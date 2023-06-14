import React from "react";
import { CategoryAndNationPage } from "UI";

export const OrganisationAdvertisingStepFirst = () => {
  return (
    <div>
      <CategoryAndNationPage
        isOrganisation={true}
        pageTitle="Create your listing"
      />
    </div>
  );
};
