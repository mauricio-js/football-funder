import React from "react";
import {
  CreateFundraiserSignIn,
  CreateListingSignIn,
  CreateFundraiserStepFirst,
  CreateFundraiserStepSecond,
  CreateFundraiserStepThird,
  MultiStepForm,
} from "Pages";

export const CreateYourFundraiser: React.FC = () => {
  const pages = [
    <CreateFundraiserSignIn />,
    <CreateListingSignIn />,
    <CreateFundraiserStepFirst />,
    <CreateFundraiserStepSecond />,
    <CreateFundraiserStepThird />,
  ];

  return (
    <div>
      <MultiStepForm pages={pages} />
    </div>
  );
};
