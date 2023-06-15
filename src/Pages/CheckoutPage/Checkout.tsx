import React from "react";
import {
  BillingDetailsPage,
  PaymentDetailPage,
  PaymentDetailsPage,
} from "Pages";
import { Stepper } from "UI";

export const Checkout: React.FC = () => {
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "PaymentDetailsPage",
      component: <PaymentDetailsPage />,
    },
    {
      name: "BillingDetailsPage",
      component: <BillingDetailsPage />,
    },
    {
      name: "PaymentDetailPage",
      component: <PaymentDetailPage />,
    },
  ];
  const ContinueButtonText = ["Continue", "Continue", "Place order"];
  return (
    <div>
      <Stepper
        pages={pages}
        buttonText={ContinueButtonText}
        isShowLastStepButton={true}
      />
    </div>
  );
};
