import { createContext, useState, useEffect } from "react";
interface StepContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}
export const StepContext = createContext<StepContextType>({
  currentStep: 0,
  setCurrentStep: () => {},
});
interface StepContextProviderProps {
  children: React.ReactNode;
}

export const StepContextProvider: React.FC<StepContextProviderProps> = ({
  children,
}) => {
  const [currentStep, setCurrentStepState] = useState<number>(0);
  const setCurrentStep = (step: number): void => {
    localStorage.setItem("currentStep", String(step));
    setCurrentStepState(step);
  };
  useEffect(() => {
    const storedStep = localStorage.getItem("currentStep");
    if (storedStep) {
      setCurrentStepState(parseInt(storedStep));
    }
  }, []);
  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepContext.Provider>
  );
};
