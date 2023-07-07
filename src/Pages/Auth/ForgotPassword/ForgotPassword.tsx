import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios, useIsMounted, SIGNIN_URL } from "Lib";
import useToast from "Lib/useToast";
import {
  ForgotPasswordStepFirst,
  ForgotPasswordStepSecond,
  ForgotPasswordStepThird,
  ForgotPasswordStepFourth,
} from "Pages";
import { GeneralStepper, Template } from "UI";
import { resetPasswordFormDataType } from "./types";

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const axios = useAxios();
  const { setSafely } = useIsMounted();
  const { handleErrorMessage } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );

  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const data: resetPasswordFormDataType = {
    token: "",
    password: formValues.password,
    password_confirmation: formValues.password_confirmation,
  };

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
  const HandleChangePassword = () => {
    setSafely(setIsLoading, true);
    axios
      .post(`auth/reset_password`, data)
      .then((res) => {
        setSafely(setIsLoading, false);
        handleNextPage();
      })
      .catch((err) => {
        console.log(err);
        const errorMessage = err.errors[0].message;
        handleErrorMessage(errorMessage);
        setSafely(setIsLoading, false);
      });
  };

  //   const navigate = useNavigate();
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "ForgotPasswordStepFirst",
      component: <ForgotPasswordStepFirst handleNextPage={handleNextPage} />,
    },
    {
      name: "ForgotPasswordStepSecond",
      component: (
        <ForgotPasswordStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          formValues={formValues}
          onInputChange={handleInputChange}
        />
      ),
    },
    {
      name: "ForgotPasswordStepThird",
      component: (
        <ForgotPasswordStepThird
          handlePrevPage={handlePrevPage}
          formValues={formValues}
          onInputChange={handleInputChange}
          handleSubmit={HandleChangePassword}
        />
      ),
    },
    {
      name: "ForgotPasswordStepFourth",
      component: (
        <ForgotPasswordStepFourth
          handlePrevPage={handlePrevPage}
          handleNextPage={() => navigate(SIGNIN_URL)}
        />
      ),
    },
  ];

  return (
    <Template isLoading={isLoading}>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
