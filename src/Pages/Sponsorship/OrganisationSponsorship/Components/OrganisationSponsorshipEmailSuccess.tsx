import React from "react";
import { EmailSuccessPage } from "UI";
import { StepperActionPropsType } from "types";
export const OrganisationSponsorshipEmailSuccess: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <EmailSuccessPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};
