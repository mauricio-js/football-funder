import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Button, Template } from "UI";

interface ParentComponentProps {
  pages: React.ReactNode[];
}

export const MultiStepForm: React.FC<ParentComponentProps> = ({ pages }) => {
  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );
  function handleNextPage() {
    if (currentStep < pages.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }
  function handlePrevPage() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  useEffect(() => {
    sessionStorage.setItem("currentStep", String(currentStep));
  }, [currentStep]);
  return (
    <Template title="Stepper">
      {pages[currentStep]}
      <div
        className={classNames(
          " w-[1000px] max-lg:w-full px-[20px] mb-[150px] max-ns:mb-[100px]",
          "mt-[60px] max-ns:mt-[30px] flex max-2xs:flex-col",
          "max-2xs:items-center gap-y-[10px] mx-auto",
          currentStep > 0 ? "justify-between" : "justify-end"
        )}
      >
        {currentStep > 0 && (
          <Button
            backgroundColor="bg-green-10"
            textColor="text-black"
            textSize="text-[16px] leading-[20px] font-semibold"
            height="h-[50px]"
            width="ns:w-[250px] w-full"
            text="Back"
            handleClick={handlePrevPage}
            disabled={currentStep === 0}
          />
        )}
        {currentStep < pages.length - 1 && (
          <Button
            backgroundColor="bg-green-10"
            textColor="text-black"
            textSize="text-[16px] leading-[20px] font-semibold"
            height="h-[50px]"
            width="ns:w-[250px] w-full"
            text="Continue"
            handleClick={handleNextPage}
          />
        )}
      </div>
    </Template>
  );
};
