import React from "react";
import {
  CreateFundraiserSignIn,
  CreateListingSignIn,
  CreateFundraiserStepFirst,
  CreateFundraiserStepSecond,
  CreateFundraiserStepThird,
  CreateFundraiserStepFourth,
  CreateFundraiserStepFiveth,
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
    <CreateFundraiserStepFiveth />,
  ];

  return (
    <div>
      <MultiStepForm pages={pages} />
    </div>
  );
};
