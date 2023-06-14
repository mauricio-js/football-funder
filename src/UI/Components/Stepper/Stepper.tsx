import React, { useState } from "react";
import classNames from "classnames";
import { Button, Template } from "UI";

interface ParentComponentProps {
  pages: { name: string; component: React.ReactNode }[];
  buttonText: string[];
}

export const Stepper: React.FC<ParentComponentProps> = ({
  pages,
  buttonText,
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
      // console.log("Submit");
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
      {currentStep !== pages.length - 1 && (
        <div
          className={classNames(
            "px-5 flex max-sm:flex-col-reverse",
            "max-sm:items-center gap-y-5 mx-auto",
            currentStep > 0 ? "justify-between" : "justify-end",
            pages[currentStep].name === "EmailConfirmPage"
              ? "w-[600px] max-sm:w-full  mb-[450px] max-lg:mb-[200px]"
              : "w-[1000px] max-lg:w-full  mb-[150px] max-ns:mb-[100px]",

            pages[currentStep].name === "EmailSuccessPage"
              ? "w-[600px] max-sm:w-full  mb-[530px] max-lg:mb-[300px]"
              : "w-[1000px] max-lg:w-full  mb-[150px] max-ns:mb-[100px]"
            // pages[currentStep].name === "EmailSuccessPage" ||
            //   pages[currentStep].name === "EmailConfirmPage"
            //   ? "max-sm:flex-col-reverse"
            //   : "max-sm:flex-col"
          )}
        >
          {currentStep > 0 && currentStep < pages.length - 1 && (
            <Button
              backgroundColor="bg-white border-2 border-gray-300"
              textColor="text-black"
              textSize="text-[16px] leading-[20px] font-semibold"
              height="h-[50px]"
              width="sm:w-[250px] ns:w-[400px] w-full"
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
              width="sm:w-[250px] ns:w-[400px] w-full"
              text={buttonText[currentStep]}
              handleClick={handleNextPage}
            />
          )}
        </div>
      )}
    </Template>
  );
};
