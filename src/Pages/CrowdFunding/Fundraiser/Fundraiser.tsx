import React, { useState, useContext } from "react";
import {
  IndividualFundraiserSignInStepSecond,
  IndividualFundraiserStepFirst,
  IndividualFundraiserStepSecond,
  IndividualFundraiserStepThird,
  IndividualFundraiserStepFourth,
  IndividualFundraiserStepFiveth,
  IndividualFundraiserStepSixth,
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
} from "./Components";
import { GeneralStepper, Template } from "UI";

import { FormStepperContext } from "App/FormStepperProvider";

export const Fundraiser: React.FC = () => {
  const { selectValue } = useContext(FormStepperContext)!;
  console.log("selectValue", selectValue);

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
      name: "FundraiserSignInStepFirst",
      component: (
        <OrganisationFundraiserSignInStepFirst
          handleNextPage={handleNextPage}
        />
      ),
    },

    ...(selectValue.fundraiser_category === 2
      ? [
          {
            name: "FundraiserSignInStepSecond",
            component: (
              <IndividualFundraiserSignInStepSecond
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepFirst",
            component: (
              <IndividualFundraiserStepFirst
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepSecond",
            component: (
              <IndividualFundraiserStepSecond
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepThird",
            component: (
              <IndividualFundraiserStepThird
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepFourth",
            component: (
              <IndividualFundraiserStepFourth
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepFiveth",
            component: (
              <IndividualFundraiserStepFiveth
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepSixth",
            component: (
              <IndividualFundraiserStepSixth
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
        ]
      : [
          {
            name: "FundraiserSignInStepSecond",
            component: (
              <OrganisationFundraiserSignInStepSecond
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepFirst",
            component: (
              <OrganisationFundraiserStepFirst
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepSecond",
            component: (
              <OrganisationFundraiserStepSecond
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepThird",
            component: (
              <OrganisationFundraiserStepThird
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepFourth",
            component: (
              <OrganisationFundraiserStepFourth
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepFiveth",
            component: (
              <OrganisationFundraiserStepFiveth
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepSixth",
            component: (
              <OrganisationFundraiserStepSixth
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
          {
            name: "FundraiserStepSeventh",
            component: (
              <OrganisationFundraiserStepSeventh
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            ),
          },
        ]),
    {
      name: "FundraiserFinalPage",
      component: <OrganisationFundraiserFinalPage />,
    },
  ];

  return (
    <Template>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
