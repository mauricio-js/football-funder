import React, { useState } from "react";
import {
  IndividualAdvertisingStepFirst,
  IndividualAdvertisingStepSecond,
  IndividualAdvertisingStepThird,
  IndividualAdvertisingStepFourth,
  IndividualAdvertisingStepFiveth,
  IndividualAdvertisingEmailConfirm,
  IndividualAdvertisingEmailSuccess,
  IndividualAdvertisingFinalPage,
} from "Pages";
import { GeneralStepper } from "UI";

export const IndividualListing: React.FC = () => {
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
      name: "IndividualAdvertisingStepFirst",
      component: (
        <IndividualAdvertisingStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualAdvertisingStepSecond",
      component: (
        <IndividualAdvertisingStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "EmailConfirmPage",
      component: (
        <IndividualAdvertisingEmailConfirm
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "EmailSuccessPage",
      component: (
        <IndividualAdvertisingEmailSuccess
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualAdvertisingStepThird",
      component: (
        <IndividualAdvertisingStepThird
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualAdvertisingStepFourth",
      component: (
        <IndividualAdvertisingStepFourth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },

    {
      name: "IndividualAdvertisingStepFiveth",
      component: (
        <IndividualAdvertisingStepFiveth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualAdvertisingFinalPage",
      component: <IndividualAdvertisingFinalPage />,
    },
  ];

  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
