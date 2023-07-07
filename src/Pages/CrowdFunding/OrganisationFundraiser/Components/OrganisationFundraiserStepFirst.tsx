import React from "react";
import { BasicInformationPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationFundraiserStepFirst: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <BasicInformationPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isAuth={true}
        showAccountDetails={false}
        showOrganisation={false}
        showConfirmation={false}
        showModifyAlert={true}
        showProfileURL={false}
        contactText="Please provide the details of the legal contact for the fundraiser."
        pageTitle="Create your fundraiser"
        stepTitle="Your basic information"
        stepNumber="Step 1"
      />
    </div>
  );
};
