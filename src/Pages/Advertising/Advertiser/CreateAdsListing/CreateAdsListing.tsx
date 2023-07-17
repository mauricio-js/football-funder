import React, { useState, useContext } from "react";
import {
  CreateAdsListingFinalPage,
  CreateAdsListingFirstStep,
  CreateAdsListingThirdStep,
  CreateAdsListingFourthStep,
  CreateAdsListingSecondStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { FormStepperContext } from "App/FormStepperProvider";

export const CreateAdsListing: React.FC = () => {
  const { selectValue } = useContext(FormStepperContext);
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
      name: "CreateAdsListingFirstStep",
      component: (
        <CreateAdsListingFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateAdsListingSecondStep",
      component: (
        <CreateAdsListingSecondStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateAdsListingThirdStep",
      component: (
        <CreateAdsListingThirdStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateAdsListingFourthStep",
      component: (
        <CreateAdsListingFourthStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingFinalPage",
      component: <CreateAdsListingFinalPage />,
    },
  ];

  return (
    <Template>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
