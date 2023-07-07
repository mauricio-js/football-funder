import React from "react";
import { BasicInformationPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualSponsorshipStepSecond: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <BasicInformationPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isAuth={false}
        showAccountDetails={true}
        showOrganisation={false}
        showConfirmation={true}
        showModifyAlert={true}
        showProfileURL={false}
        contactText="Please provide the details of the organisation that you are listing advertising opportunities for."
        pageTitle="Create your listing"
        stepTitle="Organisation information"
        stepNumber="Step 2"
      />
    </div>
  );
};
