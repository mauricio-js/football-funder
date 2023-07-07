import React, { useEffect, useRef } from "react";

import { FiAlertCircle } from "react-icons/fi";

interface ErrorMessagePropsType {
  error: string;
}

export const ErrorMessage: React.FC<ErrorMessagePropsType> = ({ error }) => {
  const alertDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (alertDiv.current) {
      setTimeout(() => {
        if (alertDiv.current) {
          alertDiv.current.classList.add("opacity-100");
          alertDiv.current.classList.remove("opacity-0");
        }
      }, 100);
    }
    setTimeout(() => {
      if (alertDiv.current) {
        alertDiv.current.classList.remove("opacity-100");
        alertDiv.current.classList.add("opacity-0");
      }
    }, 2000);
  }, []);
  return (
    <div
      ref={alertDiv}
      className="bg-red-500 opacity-0 py-2.5 px-5 rounded-10
          flex justify-center  transition-opacity duration-1000 ease-in-out"
    >
      <div className="flex items-center  gap-2.5 text-base text-white">
        <FiAlertCircle />
        {error}
      </div>
    </div>
  );
};
