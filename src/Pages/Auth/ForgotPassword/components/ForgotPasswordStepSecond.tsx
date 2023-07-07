import React, { useState } from "react";
import { AccountEmailData } from "Config";
import { Button, Input, StepperBackButton } from "UI";
import { StepperActionPropsType } from "types";

export const ForgotPasswordStepSecond: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  return (
    <form>
      <div
        className="
        px-5 ns:mt-[90px] mt-[60px] ns:mb-[500px] mb-[300px]  mx-auto"
      >
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30 generalTitle  xs:text-center">Reset password</div>
        <div className="mt-15 introText  xs:text-center">
          Just enter the email address you registered with and we’ll send you a
          link to reset your password.
        </div>
        <div className="w-full mx-auto">
          <div className="mt-30 xs:w-[500px] w-full mx-auto">
            <Input
              data={AccountEmailData}
              name="email"
              onChange={handleInputChange}
              value={formValues.email || ""}
            />
          </div>
        </div>
        <div className="mt-30 w-full flex justify-center">
          <div className="xs:w-[500px] w-full">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Send password reset link"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
