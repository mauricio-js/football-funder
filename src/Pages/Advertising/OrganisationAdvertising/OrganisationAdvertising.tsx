import React, { useState } from "react";
import {
  OrganisationAdvertisingEmailConfirm,
  OrganisationAdvertisingEmailSuccess,
  OrganisationAdvertisingStepFirst,
  OrganisationAdvertisingStepSecond,
  OrganisationAdvertisingStepThird,
  OrganisationAdvertisingStepFourth,
  OrganisationAdvertisingStepFiveth,
  OrganisationAdvertisingStepSixth,
  OrganisationAdvertisingFinalPage,
} from "Pages";
import { GeneralStepper } from "UI";

export const OrganisationListing: React.FC = () => {
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
      name: "OrganisationAdvertisingStepFirst",
      component: (
        <OrganisationAdvertisingStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingStepSecond",
      component: (
        <OrganisationAdvertisingStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "EmailConfirmPage",
      component: (
        <OrganisationAdvertisingEmailConfirm
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "EmailSuccessPage",
      component: (
        <OrganisationAdvertisingEmailSuccess
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingStepThird",
      component: (
        <OrganisationAdvertisingStepThird
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingStepFourth",
      component: (
        <OrganisationAdvertisingStepFourth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingStepFiveth",
      component: (
        <OrganisationAdvertisingStepFiveth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingStepSixth",
      component: (
        <OrganisationAdvertisingStepSixth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingFinalPage",
      component: <OrganisationAdvertisingFinalPage />,
    },
  ];

  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
