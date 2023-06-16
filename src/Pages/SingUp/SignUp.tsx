import React from "react";
import { useNavigate } from "react-router-dom";
import { SIGNIN_URL } from "Lib";
import { SignUpStepFirst, SignUpStepSecond, SignUpStepThird } from "Pages";
import { Stepper } from "UI";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "SignUpStepFirst",
      component: <SignUpStepFirst />,
    },
    {
      name: "SignUpStepSecond",
      component: <SignUpStepSecond />,
    },
    {
      name: "SignUpStepThird",
      component: <SignUpStepThird />,
    },
  ];
  const ContinueButtonText = ["Continue", "Continue", "Register"];
  return (
    <Stepper
      buttonText={ContinueButtonText}
      pages={pages}
      isShowLastStepButton={true}
      handleClick={() => navigate(SIGNIN_URL)}
    />
  );
};
