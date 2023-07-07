import React, { useState } from "react";
import {
  OrganisationFundraiserSignInStepFirst,
  OrganisationFundraiserSignInStepSecond,
  OrganisationFundraiserStepFirst,
  OrganisationFundraiserStepSecond,
  OrganisationFundraiserStepThird,
  OrganisationFundraiserStepFourth,
  OrganisationFundraiserStepFiveth,
  OrganisationFundraiserStepSixth,
  OrganisationFundraiserStepSeventh,
  OrganisationFundraiserFinalPage,
} from "Pages";
import { GeneralStepper } from "UI";

export const OrganisationFundraiser: React.FC = () => {
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
      name: "OrganisationFundraiserSignInStepFirst",
      component: (
        <OrganisationFundraiserSignInStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationFundraiserSignInStepSecond",
      component: (
        <OrganisationFundraiserSignInStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationFundraiserStepFirst",
      component: (
        <OrganisationFundraiserStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationFundraiserStepSecond",
      component: (
        <OrganisationFundraiserStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationFundraiserStepThird",
      component: (
        <OrganisationFundraiserStepThird
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationFundraiserStepFourth",
      component: (
        <OrganisationFundraiserStepFourth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationFundraiserStepFiveth",
      component: (
        <OrganisationFundraiserStepFiveth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationFundraiserStepSixth",
      component: (
        <OrganisationFundraiserStepSixth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationFundraiserStepSeventh",
      component: (
        <OrganisationFundraiserStepSeventh
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationFundraiserFinalPage",
      component: <OrganisationFundraiserFinalPage />,
    },
  ];

  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
