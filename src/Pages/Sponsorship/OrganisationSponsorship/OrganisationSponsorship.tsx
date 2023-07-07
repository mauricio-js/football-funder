import React, { useState } from "react";
import {
  OrganisationSponsorshipEmailConfirm,
  OrganisationSponsorshipEmailSuccess,
  OrganisationSponsorshipStepFirst,
  OrganisationSponsorshipStepSecond,
  OrganisationSponsorshipStepThird,
  OrganisationSponsorshipStepFourth,
  OrganisationSponsorshipStepFiveth,
  OrganisationSponsorshipStepSixth,
  OrganisationSponsorshipFinalPage,
} from "Pages";
import { GeneralStepper } from "UI";

export const OrganisationSponsorship: React.FC = () => {
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
      name: "OrganisationSponsorshipStepFirst",
      component: (
        <OrganisationSponsorshipStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationSponsorshipStepSecond",
      component: (
        <OrganisationSponsorshipStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "EmailConfirmPage",
      component: (
        <OrganisationSponsorshipEmailConfirm
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "EmailSuccessPage",
      component: (
        <OrganisationSponsorshipEmailSuccess
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingStepThird",
      component: (
        <OrganisationSponsorshipStepThird
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingStepFourth",
      component: (
        <OrganisationSponsorshipStepFourth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingStepFiveth",
      component: (
        <OrganisationSponsorshipStepFiveth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingStepSixth",
      component: (
        <OrganisationSponsorshipStepSixth
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "OrganisationAdvertisingFinalPage",
      component: <OrganisationSponsorshipFinalPage />,
    },
  ];

  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
