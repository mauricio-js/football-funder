import React, { useState } from "react";
// import classNames from "classnames";
import { Template } from "UI";

interface ParentComponentProps {
  pages: { name: string; component: React.ReactNode }[];
  buttonText: string[];
  isShowLastStepButton?: boolean;
  handleClick?: () => void;
}

export const GeneralStepper: React.FC<ParentComponentProps> = ({
  pages,
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
      // handleClick();
    }
  }
  function handlePrevPage() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const pagesWithHandlers = pages.map((page, index) => {
    const newProps = {
      onNextPage: handleNextPage,
      onPrevPage: handlePrevPage,
    };
    const newComponent = React.cloneElement(
      page.component as React.ReactElement,
      newProps
    );
    return { ...page, component: newComponent };
  });

  // useEffect(() => {
  //   sessionStorage.setItem("currentStep", String(currentStep));
  // }, [currentStep]);
  return (
    // <Template title="Stepper">
    <Template>{pagesWithHandlers[currentStep].component}</Template>
  );
};
