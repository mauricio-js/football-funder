import React from "react";
import { CategoryAndNationPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationAdvertisingStepFirst: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <CategoryAndNationPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isOrganisation={true}
        pageTitle="Create your listing"
      />
    </div>
  );
};
