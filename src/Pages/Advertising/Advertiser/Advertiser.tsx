import React, { useState, useContext } from "react";
import {
  IndividualAdvertisingEmailConfirm,
  IndividualAdvertisingEmailSuccess,
  IndividualAdvertisingStepFiveth,
  IndividualAdvertisingStepFourth,
  IndividualAdvertisingStepSecond,
  IndividualAdvertisingStepThird,
  OrganisationAdvertisingEmailConfirm,
  OrganisationAdvertisingEmailSuccess,
  OrganisationAdvertisingStepFirst,
  OrganisationAdvertisingStepSecond,
  OrganisationAdvertisingStepThird,
  OrganisationAdvertisingStepFourth,
  OrganisationAdvertisingStepFiveth,
  OrganisationAdvertisingStepSixth,
  OrganisationAdvertisingFinalPage,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { FormStepperContext } from "App/FormStepperProvider";

export const Advertiser: React.FC = () => {
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
      name: "OrganisationAdvertisingStepFirst",
      component: (
        <OrganisationAdvertisingStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    ...(selectValue.advertiser_category === 2
      ? [
          {
            name: "IndividualAdvertisingStepSecond",
            component: (
              <IndividualAdvertisingStepSecond
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "EmailConfirmPage",
            component: (
              <IndividualAdvertisingEmailConfirm
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "EmailSuccessPage",
            component: (
              <IndividualAdvertisingEmailSuccess
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "IndividualAdvertisingStepThird",
            component: (
              <IndividualAdvertisingStepThird
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "IndividualAdvertisingStepFourth",
            component: (
              <IndividualAdvertisingStepFourth
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },

          {
            name: "IndividualAdvertisingStepFiveth",
            component: (
              <IndividualAdvertisingStepFiveth
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
        ]
      : [
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
        ]),
    {
      name: "OrganisationAdvertisingFinalPage",
      component: <OrganisationAdvertisingFinalPage />,
    },
  ];

  return (
    <Template>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
