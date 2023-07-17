import React, { useState } from "react";
import { SponsorSignUpFirstStep, SponsorSignUpSecondStep } from "./Components";
import { GeneralStepper, Template } from "UI";

export const SponsorshipSignUp: React.FC = () => {
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
      name: "SponsorSignUpFirstStep",
      component: (
        <SponsorSignUpFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },

    {
      name: "SponsorSignUpSecondStep",
      component: (
        <SponsorSignUpSecondStep
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
