import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { SIGNIN_URL } from "Lib";
import {
  ForgotPasswordStepFirst,
  ForgotPasswordStepSecond,
  ForgotPasswordStepThird,
  ForgotPasswordStepFourth,
} from "Pages";
import { GeneralStepper } from "UI";

export const ForgotPassword: React.FC = () => {
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
  //   const navigate = useNavigate();
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "ForgotPasswordStepFirst",
      component: (
        <ForgotPasswordStepFirst
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "ForgotPasswordStepSecond",
      component: (
        <ForgotPasswordStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "ForgotPasswordStepThird",
      component: (
        <ForgotPasswordStepThird
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "ForgotPasswordStepFourth",
      component: (
        <ForgotPasswordStepFourth
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
