import React, { useState, useEffect } from "react";
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
  // function handlePrevPage() {
  //   if (currentPageIndex > 0) {
  //     setCurrentPageIndex(currentPageIndex - 1);
  //   }
  // }

  useEffect(() => {
    sessionStorage.setItem("currentStep", String(currentStep));
  }, [currentStep]);
  return (
    <Template title="Stepper">
      {pages[currentStep]}
      <div
        className=" w-[1000px] max-lg:w-full px-[20px] mb-[150px] max-ns:mb-[100px] 
                    mt-[60px] max-ns:mt-[30px] flex justify-end mx-auto"
      >
        <div className="w-[250px] max-ns:w-full">
          <Button
            backgroundColor="bg-green-10"
            textColor="text-black"
            textSize="text-[16px] leading-[20px] font-semibold"
            height="h-[50px]"
            width="w-full"
            text="Continue"
            handleClick={handleNextPage}
          />
        </div>
      </div>
    </Template>
  );
};
