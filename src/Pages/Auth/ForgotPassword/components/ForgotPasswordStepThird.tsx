import React, { useState } from "react";
import { AccountConfirmPasswordData, AccountPasswordData } from "Config";
import { Button, Input, StepperBackButton } from "UI";
import { StepperActionPropsType } from "types";

export const ForgotPasswordStepThird: React.FC<StepperActionPropsType> = ({
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
        <div className="mt-30  xs:text-center generalTitle">
          Add new password
        </div>
        <div className="mt-15  xs:text-center introText">
          Enter your new password.
        </div>
        <div className="mt-30 xs:w-[500px] mx-auto w-full flex justify-center flex-col gap-2.5">
          <Input
            data={AccountPasswordData}
            name="password"
            onChange={handleInputChange}
            value={formValues.password}
          />
          <Input
            data={AccountConfirmPasswordData}
            name="confirm_password"
            onChange={handleInputChange}
            value={formValues.confirm_password}
          />
        </div>
        <div className="mt-30 w-full flex justify-center">
          <div className="xs:w-[500px] w-full">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Create new password"
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
