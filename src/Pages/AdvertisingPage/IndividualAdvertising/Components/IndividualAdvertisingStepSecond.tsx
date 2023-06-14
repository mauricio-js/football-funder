import React from "react";
import { BasicInformationPage } from "UI";

export const IndividualAdvertisingStepSecond = () => {
  return (
    <div>
      <BasicInformationPage
        isAuth={true}
        showAccountDetails={true}
        showOrganisation={false}
        showConfirmation={true}
        showModifyAlert={true}
        showProfileURL={true}
        contactText="Please provide the details of the commercial contact for the advertising."
        stepTitle="Your basic information"
        stepNumber="Step 2"
      />
    </div>
  );
};
