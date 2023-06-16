import React from "react";
import { BasicInformationPage } from "UI";

export const OrganisationSponsorshipStepThird = () => {
  return (
    <BasicInformationPage
      isAuth={false}
      showAccountDetails={false}
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
