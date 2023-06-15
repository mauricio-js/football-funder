import React from "react";
import {
  Button,
  EditableCheckoutPanel,
  PageTitle,
  StepLabel,
  PageSectionTitle,
} from "UI";

export const PaymentDetailsPage: React.FC = () => {
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[60px] max-ns:mb-30 mx-auto"
    >
      <PageTitle title="Checkout" />
      <div className="mt-30">
        <StepLabel number="Step 1" title="Payment details" />

        <div className="mt-30 xs:w-[500px]">
          <PageSectionTitle title="Summary" />
          <div className="divide-y-2 divide-gray-300">
            <div className="py-5">
              <EditableCheckoutPanel />
            </div>
            <div className="py-5">
              <EditableCheckoutPanel />
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle title="Total to pay" />
            <div className="mt-15">
              <div className="rounded-10 border-[1px] border-gray-200 bg-gray-100 p-15 flex justify-between">
                <div className="generalSmallGrayText">Amount</div>
                <div className="valueText">£35.98</div>
              </div>
            </div>
          </div>
          <div className="mt-[60px] generalSmallGrayText">
            To add more advertising and sponsorship listings, select an option
            below. Your current listing(s) will remain in your basket.
          </div>
          <div className="mt-15">
            <div className="flex gap-2.5 max-ns:flex-col max-ns:justify-center">
              <Button
                backgroundColor="bg-green-70"
                height="h-[50px]"
                padding="px-5 py-15"
                text="Add sponsorship listing"
                textColor="text-white"
                textSize="generalSmallGrayText"
              />
              <Button
                backgroundColor="bg-green-70"
                height="h-[50px]"
                padding="px-5 py-15"
                text="Add sponsorship listing"
                textColor="text-white"
                textSize="generalSmallGrayText"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
