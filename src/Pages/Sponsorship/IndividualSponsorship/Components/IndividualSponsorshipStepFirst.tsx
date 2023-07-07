import React from "react";
import { CategoryAndNationPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualSponsorshipStepFirst: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <CategoryAndNationPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isOrganisation={false}
        pageTitle="Create your listing"
      />
    </div>
  );
};
