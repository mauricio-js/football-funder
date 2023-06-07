import React from "react";
import {
  CreateFundraiserSignIn,
  CreateListingSignIn,
  CreateFundraiserStepFirst,
  CreateFundraiserStepSecond,
  CreateFundraiserStepThird,
  CreateFundraiserStepFourth,
  MultiStepForm,
} from "Pages";

export const CreateYourFundraiser: React.FC = () => {
  const pages = [
    <CreateFundraiserSignIn />,
    <CreateListingSignIn />,
    <CreateFundraiserStepFirst />,
    <CreateFundraiserStepSecond />,
    <CreateFundraiserStepThird />,
    <CreateFundraiserStepFourth />,
  ];

  return (
    <div>
      <MultiStepForm pages={pages} />
    </div>
  );
};
