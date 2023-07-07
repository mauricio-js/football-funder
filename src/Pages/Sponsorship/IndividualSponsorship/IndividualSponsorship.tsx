import React, { useState } from "react";
import {
  IndividualSponsorshipEmailConfirm,
  IndividualSponsorshipEmailSuccess,
  IndividualSponsorshipStepFirst,
  IndividualSponsorshipStepSecond,
  IndividualSponsorshipStepThird,
  IndividualSponsorshipStepFourth,
  IndividualSponsorshipStepFiveth,
  IndividualSponsorshipFinalPage,
} from "Pages";
import { GeneralStepper } from "UI";

export const IndividualSponsorship: React.FC = () => {
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
      name: "IndividualSponsorshipStepFirst",
      component: (
        <IndividualSponsorshipStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualSponsorshipStepSecond",
      component: (
        <IndividualSponsorshipStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "EmailConfirmPage",
      component: (
        <IndividualSponsorshipEmailConfirm
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "EmailSuccessPage",
      component: (
        <IndividualSponsorshipEmailSuccess
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualAdvertisingStepThird",
      component: (
        <IndividualSponsorshipStepThird
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualAdvertisingStepFourth",
      component: (
        <IndividualSponsorshipStepFourth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualAdvertisingStepFiveth",
      component: (
        <IndividualSponsorshipStepFiveth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "IndividualAdvertisingFinalPage",
      component: <IndividualSponsorshipFinalPage />,
    },
  ];

  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
