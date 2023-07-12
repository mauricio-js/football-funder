import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useAxios, SIGNIN_URL } from "Lib";
import {
  ForgotPasswordStepFirst,
  ForgotPasswordStepSecond,
  ForgotPasswordStepFourth,
} from "Pages";
import { StatusContext } from "App/StatusProvider";
import { GeneralStepper, Template } from "UI";

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const axios = useAxios();
  const { showStatus } = useContext(StatusContext);
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

  const sendForgotPasswordLink = useMutation(
    (params: any) => axios.post("/auth/send_password_reset", params),
    {
      onSuccess: () => {
        showStatus("Just sent a reset password link. Please check your email!");
      },
      onError: (err: any) => {
        const error = err.response?.data?.error ?? "";
        if (error === "invalid-user")
          showStatus("You are not registered user!", "error");
      },
    }
  );

  function handleSendResetPassword() {
    sendForgotPasswordLink.mutate(formValues);
  }

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
          handleSendResetPassword={handleSendResetPassword}
          formValues={formValues}
          onInputChange={handleInputChange}
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
    <Template
      title="ForgotPassword"
      isLoading={sendForgotPasswordLink.isLoading}
    >
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
