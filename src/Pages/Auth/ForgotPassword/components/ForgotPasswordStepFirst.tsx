import React from "react";
import { Button, StepperBackButton } from "UI";
import { StepperActionPropsType } from "types";

export const ForgotPasswordStepFirst: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <div>
      <div
        className="
        px-5 ns:mt-[90px] mt-[60px] ns:mb-[500px] mb-[300px]  mx-auto"
      >
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30 generalTitle xs:text-center">
          I've forgotten my password
        </div>
        <div className="mt-15 introText xs:text-center">
          If you're logged out and can't remember your password, we can send you
          an email with a link to reset it.
        </div>
        <div className="mt-30 w-full flex justify-center">
          <div className="xs:w-[500px] w-full">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Reset password"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
