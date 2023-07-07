import React from "react";
import { BasicInformationPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualAdvertisingStepSecond: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <BasicInformationPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isAuth={true}
        showAccountDetails={true}
        showOrganisation={false}
        showConfirmation={true}
        showModifyAlert={true}
        showProfileURL={true}
        contactText="Please provide the details of the commercial contact for the advertising."
        pageTitle="Create your listing"
        stepTitle="Your basic information"
        stepNumber="Step 2"
      />
    </div>
  );
};
