import React from "react";
import { AccountConfirmPasswordData, AccountPasswordData } from "Config";
import { Button, Input, StepperBackButton } from "UI";

interface ResetPasswordStep3PropsType {
  handlePrevPage: () => void;
  formValues: { [key: string]: string };
  onInputChange: (name: string, value: string) => void;
  handleSubmit: () => void;
}
export const ForgotPasswordStepThird: React.FC<ResetPasswordStep3PropsType> = ({
  handlePrevPage,
  formValues,
  onInputChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="
       md:w-[720px] w-full px-5 ns:mt-[90px] mt-[60px] ns:mb-[500px] mb-[300px]  mx-auto"
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
            onChange={onInputChange}
            value={formValues.password || ""}
          />
          <Input
            data={AccountConfirmPasswordData}
            name="password_confirmation"
            onChange={onInputChange}
            value={formValues.password_confirmation || ""}
          />
        </div>
        <div className="mt-30 w-full flex justify-center">
          <div className="xs:w-[500px] w-full">
            <Button
              type="submit"
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Create new password"
              textColor="text-green-70"
              textSize="buttonText"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
