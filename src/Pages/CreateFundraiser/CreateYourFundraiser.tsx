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
  CreateFundraiserFinalPage,
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
    <CreateFundraiserFinalPage />,
  ];

  return (
    <div>
      <MultiStepForm pages={pages} />
    </div>
  );
};
