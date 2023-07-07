import React from "react";
import { EmailSuccessPage } from "UI";
import { StepperActionPropsType } from "types";
export const OrganisationAdvertisingEmailSuccess: React.FC<
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
