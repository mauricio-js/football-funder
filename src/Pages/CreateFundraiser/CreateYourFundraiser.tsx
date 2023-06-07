import React from "react";
import {
  CreateFundraiserSignIn,
  CreateListingSignIn,
  CreateFundraiserStepFirst,
  CreateFundraiserStepSecond,
  CreateFundraiserStepThird,
  CreateFundraiserStepFourth,
  CreateFundraiserStepFiveth,
  CreateFundraiserStepSixth,
  CreateFundraiserStepSeventh,
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
    <CreateFundraiserStepSixth />,
    <CreateFundraiserStepSeventh />,
  ];

  return (
    <div>
      <MultiStepForm pages={pages} />
    </div>
  );
};
