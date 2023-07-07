import React, { useState } from "react";
import {
  IndividualFundraiserSignInStepFirst,
  IndividualFundraiserSignInStepSecond,
  IndividualFundraiserStepFirst,
  IndividualFundraiserStepSecond,
  IndividualFundraiserStepThird,
  IndividualFundraiserStepFourth,
  IndividualFundraiserStepFiveth,
  IndividualFundraiserStepSixth,
  IndividualFundraiserFinalPage,
} from "Pages";
import { GeneralStepper } from "UI";

export const IndividualFundraiser: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );

  function handleNextPage() {
    if (currentStep < pages.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function handlePrevPage() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "IndividualFundraiserSignInStepFirst",
      component: (
        <IndividualFundraiserSignInStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualFundraiserSignInStepSecond",
      component: (
        <IndividualFundraiserSignInStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualFundraiserStepFirst",
      component: (
        <IndividualFundraiserStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualFundraiserStepSecond",
      component: (
        <IndividualFundraiserStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualFundraiserStepThird",
      component: (
        <IndividualFundraiserStepThird
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualFundraiserStepFourth",
      component: (
        <IndividualFundraiserStepFourth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualFundraiserStepFiveth",
      component: (
        <IndividualFundraiserStepFiveth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualFundraiserStepSixth",
      component: (
        <IndividualFundraiserStepSixth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualFundraiserFinalPage",
      component: <IndividualFundraiserFinalPage />,
    },
  ];

  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
