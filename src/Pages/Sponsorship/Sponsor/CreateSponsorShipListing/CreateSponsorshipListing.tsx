import React, { useState } from "react";
import {
  CreateSponsorshipLisingFinalStep,
  CreateSponsorshipListingFirstStep,
  CreateSponsorshipListingSecondStep,
  CreateSponsorshipListingThirdStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";

export const CreateSponsorshipListing: React.FC = () => {
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
      name: "CreateSponsorshipListingFirstStep",
      component: (
        <CreateSponsorshipListingFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateSponsorshipListingSecondStep",
      component: (
        <CreateSponsorshipListingSecondStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateSponsorshipListingThirdStep",
      component: (
        <CreateSponsorshipListingThirdStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },

    {
      name: "CreateSponsorshipLisingFinalStep",
      component: <CreateSponsorshipLisingFinalStep />,
    },
  ];

  return (
    <Template>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
