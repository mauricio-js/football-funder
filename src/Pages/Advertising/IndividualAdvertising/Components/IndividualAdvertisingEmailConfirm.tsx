import React from "react";
import { EmailConfirmPage } from "UI";
import { StepperActionPropsType } from "types";
export const IndividualAdvertisingEmailConfirm: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <EmailConfirmPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};
