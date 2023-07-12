import React, { useState, useContext } from "react";
import {
  IndividualSponsorshipEmailConfirm,
  IndividualSponsorshipEmailSuccess,
  IndividualSponsorshipStepFiveth,
  IndividualSponsorshipStepFourth,
  IndividualSponsorshipStepSecond,
  IndividualSponsorshipStepThird,
  OrganisationSponsorshipEmailConfirm,
  OrganisationSponsorshipEmailSuccess,
  OrganisationSponsorshipStepFirst,
  OrganisationSponsorshipStepSecond,
  OrganisationSponsorshipStepThird,
  OrganisationSponsorshipStepFourth,
  OrganisationSponsorshipStepFiveth,
  OrganisationSponsorshipStepSixth,
  OrganisationSponsorshipFinalPage,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { FormStepperContext } from "App/FormStepperProvider";

export const Sponsor: React.FC = () => {
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
      name: "OrganisationSponsorshipStepFirst",
      component: (
        <OrganisationSponsorshipStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    ...(selectValue.sponsor_category === 2
      ? [
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
        ]
      : [
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
        ]),
    {
      name: "OrganisationAdvertisingFinalPage",
      component: <OrganisationSponsorshipFinalPage />,
    },
  ];

  return (
    <Template>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
