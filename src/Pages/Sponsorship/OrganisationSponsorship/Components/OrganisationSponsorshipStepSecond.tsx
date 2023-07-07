import React from "react";
import { BasicInformationPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationSponsorshipStepSecond: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <BasicInformationPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isAuth={false}
        showAccountDetails={true}
        showOrganisation={true}
        showConfirmation={false}
        showModifyAlert={false}
        showProfileURL={true}
        contactText="Please provide the details of the organisation that you are listing advertising opportunities for."
        pageTitle="Create your listing"
        stepTitle="Organisation information"
        stepNumber="Step 2"
      />
    </div>
  );
};
