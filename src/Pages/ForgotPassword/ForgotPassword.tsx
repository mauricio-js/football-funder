import React from "react";
// import { useNavigate } from "react-router-dom";
// import { SIGNIN_URL } from "Lib";
import {
  ForgotPasswordStepFirst,
  ForgotPasswordStepSecond,
  ForgotPasswordStepThird,
  ForgotPasswordStepFourth,
} from "Pages";
import { PasswordStepper } from "UI";

export const ForgotPassword: React.FC = () => {
  //   const navigate = useNavigate();
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "ForgotPasswordStepFirst",
      component: <ForgotPasswordStepFirst />,
    },
    {
      name: "ForgotPasswordStepSecond",
      component: <ForgotPasswordStepSecond />,
    },
    {
      name: "ForgotPasswordStepThird",
      component: <ForgotPasswordStepThird />,
    },
    {
      name: "ForgotPasswordStepFourth",
      component: <ForgotPasswordStepFourth />,
    },
  ];
  const ContinueButtonText = [
    "Reset password",
    "Send password reset link",
    "Create new password",
    "Sign in to my account",
  ];
  return (
    <div>
      <PasswordStepper buttonText={ContinueButtonText} pages={pages} />
    </div>
  );
};
