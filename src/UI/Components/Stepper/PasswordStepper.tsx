import React, { useState } from "react";
import classNames from "classnames";
import { Button, Template } from "UI";

interface ParentComponentProps {
  pages: { name: string; component: React.ReactNode }[];
  buttonText: string[];
  isShowLastStepButton?: boolean;
  handleClick?: () => void;
}

export const PasswordStepper: React.FC<ParentComponentProps> = ({
  pages,
  buttonText,
  isShowLastStepButton,
  handleClick,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );
  function handleNextPage() {
    if (currentStep < pages.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (currentStep === pages.length - 1) {
      // handleClick;
    }
  }
  function handlePrevPage() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // useEffect(() => {
  //   sessionStorage.setItem("currentStep", String(currentStep));
  // }, [currentStep]);
  return (
    // <Template title="Stepper">
    <Template>
      {pages[currentStep].component}

      {currentStep !== pages.length && (
        <div
          className={classNames(
            "px-5 flex max-xs:flex-col-reverse justify-center gap-5",
            "max-sm:items-center gap-y-5 mx-auto",
            " sm:mb-[500px] mb-[200px]"
          )}
        >
          {currentStep > 0 && (
            <Button
              backgroundColor="bg-white border-2 border-gray-300"
              textColor="text-black"
              textSize="text-[16px] leading-[20px] font-semibold"
              height="h-[50px]"
              width="xs:w-[240px] w-full"
              text="Back"
              handleClick={handlePrevPage}
              disabled={currentStep === 0}
            />
          )}
          {currentStep < pages.length && (
            <Button
              backgroundColor="bg-green-10"
              textColor="text-black"
              textSize="text-[16px] leading-[20px] font-semibold"
              height="h-[50px]"
              width="xs:w-[240px] w-full"
              text={buttonText[currentStep]}
              handleClick={handleNextPage}
            />
          )}
        </div>
      )}
    </Template>
  );
};
