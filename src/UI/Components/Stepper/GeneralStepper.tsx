import React from "react";
import { Template } from "UI";

interface ParentComponentProps {
  pages: { name: string; component: React.ReactNode }[];
  stepNumber: number;
}

export const GeneralStepper: React.FC<ParentComponentProps> = ({
  pages,
  stepNumber,
}) => {
  return <Template>{pages[stepNumber].component}</Template>;
};
