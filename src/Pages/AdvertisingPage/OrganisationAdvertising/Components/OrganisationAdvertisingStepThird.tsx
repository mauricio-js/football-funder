import React from "react";
import { BasicInformationPage } from "UI";

export const OrganisationAdvertisingStepThird = () => {
  return (
    <BasicInformationPage
      isAuth={false}
      showAccountDetails={true}
      showOrganisation={false}
      showConfirmation={true}
      showModifyAlert={true}
      showProfileURL={false}
      contactText="Please provide the details of the legal contact for the fundraiser."
      stepTitle="Your basic information"
      stepNumber="Step 3"
    />
  );
};
