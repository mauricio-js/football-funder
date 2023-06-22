import React, { useState } from "react";
import {
  AdvertisingSaleStep1,
  AdvertisingSaleStep2,
  AdvertisingSaleStep3,
} from "Pages";
import { GeneralStepper } from "UI";

export const SponsorshipSale: React.FC = () => {
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
      name: "AdvertisingSaleStep1",
      component: (
        <AdvertisingSaleStep1
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          introTitle="Front of shirt sponsorship - Season 2023/24"
          pageTitle="Sponsorship enquiry"
        />
      ),
    },
    {
      name: "AdvertisingSaleStep2",
      component: (
        <AdvertisingSaleStep2
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          introTitle="Front of shirt sponsorship - Season 2023/24"
          pageTitle="Sponsorship enquiry"
        />
      ),
    },
    {
      name: "AdvertisingSaleStep3",
      component: (
        <AdvertisingSaleStep3
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
  ];
  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
