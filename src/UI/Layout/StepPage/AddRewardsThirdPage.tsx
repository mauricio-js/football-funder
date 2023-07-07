import React from "react";
import {
  Button,
  EditPanelItem,
  PageSectionTitle,
  PageTitle,
  StepperBackButton,
  StepLabel,
} from "UI";
import { StepPagePropsType } from "types";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const AddRewardsThirdPage: React.FC<StepPagePropsType> = ({
  handleNextPage,
  handlePrevPage,
  pageTitle,
  stepNumber,
}) => {
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[90px] max-ns:mb-30 mx-auto"
    >
      <div className="flex flex-col gap-30">
        <PageTitle title={pageTitle} />
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <StepLabel number={stepNumber} title="Add rewards" />
        <PageSectionTitle
          intro="Give your supporters something back by offering rewards for a certain donation amount. 
                The number of rewards you can offer is unlimited."
        />
        <div className="ns:w-[390px] w-full flex flex-col gap-15">
          <div className="h-[300px] bg-gray-200 rounded-10 p-15">
            <div className="flex flex-col gap-15">
              <div className="flex justify-between">
                <div className="text-[16px] leading-5 font-semibold">
                  Early Bird Special
                </div>
                <div className="flex gap-5">
                  <button>
                    <FiEdit2 />
                  </button>
                  <button className="text-red-500">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
              <EditPanelItem index="Donation amount" value="￡60" />
              <EditPanelItem index="Availability" value="Unlimited" />
              <EditPanelItem index="Ships to" value="No shipping needed" />
              <EditPanelItem
                index="Estimated dispatch day"
                value="20 April 2023"
              />
            </div>
          </div>
          <Button
            backgroundColor="bg-green-70"
            height="h-[50px]"
            width="w-full"
            textColor="text-white"
            textSize="text-[16px] leading-[20px] font-semibold"
            text="Add new reward"
          />
        </div>
      </div>
      <div className="xs:mt-[100px] mt-[60px]">
        <div className="flex xs:justify-end">
          <div className="xs:w-[250px] w-full">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Continue"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
