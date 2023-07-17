import React, { useState } from "react";
import {
  AdvertisingSignUpFirstStep,
  AdvertisingSignUpSecondStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";

export const AdvertisingSignUp: React.FC = () => {
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
      name: "AdvertisingSignUpFirstStep",
      component: (
        <AdvertisingSignUpFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "AdvertisingSignUpSecondStep",
      component: (
        <AdvertisingSignUpSecondStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
  ];

  return (
    <Template>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
