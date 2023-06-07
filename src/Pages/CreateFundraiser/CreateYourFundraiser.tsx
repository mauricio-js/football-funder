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
  ];

  return (
    <div>
      <MultiStepForm pages={pages} />
    </div>
  );
};
