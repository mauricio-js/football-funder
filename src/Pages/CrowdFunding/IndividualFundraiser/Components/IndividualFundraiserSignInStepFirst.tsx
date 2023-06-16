import React from "react";
import { CategoryAndNationPage } from "UI";

export const IndividualFundraiserSignInStepFirst: React.FC = () => {
  return (
    <div>
      <CategoryAndNationPage
        isOrganisation={false}
        pageTitle="Create your fundraiser"
      />
    </div>
  );
};
