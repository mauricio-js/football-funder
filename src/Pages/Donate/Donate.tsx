import React, { useState } from "react";
import {
  DonateStep1,
  DonateStep2,
  DonateStep3,
  DonateStep4,
  DonateStep5,
} from "Pages";
import { GeneralStepper } from "UI";

export const Donate: React.FC = () => {
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
      name: "DonateStep1",
      component: (
        <DonateStep1
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "DonateStep2",
      component: (
        <DonateStep2
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "DonateStep3",
      component: (
        <DonateStep3
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "DonateStep4",
      component: (
        <DonateStep4
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "DonateStep5",
      component: <DonateStep5 />,
    },
  ];
  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
