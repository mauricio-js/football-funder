import React from "react";
import { BasicInformationPage } from "UI";

export const IndividualFundraiserSignInStepSecond = () => {
  return (
    <BasicInformationPage
      isAuth={false}
      contactText="Please provide the details of the legal contact for the fundraiser."
      organisation={false}
      stepTitle="Your basic information"
      stepNumber="Step 2"
    />
  );
};
