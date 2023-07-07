import React from "react";
import { BasicInformationPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationAdvertisingStepThird: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <BasicInformationPage
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      isAuth={false}
      showAccountDetails={true}
      showOrganisation={false}
      showConfirmation={true}
      showModifyAlert={true}
      showProfileURL={false}
      contactText="Please provide the details of the legal contact for the fundraiser."
      pageTitle="Create your listing"
      stepTitle="Your basic information"
      stepNumber="Step 3"
    />
  );
};
