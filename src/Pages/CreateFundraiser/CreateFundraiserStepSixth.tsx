import React from "react";
import {
  Button,
  EditPanelItem,
  PageSectionTitle,
  PageTitle,
  StepLabel,
} from "UI";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const CreateFundraiserStepSixth: React.FC = () => {
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[90px] max-ns:mb-30 mx-auto"
    >
      <div className="flex flex-col gap-30">
        <PageTitle title="Create your fundraiser" />
        <StepLabel step="Step 6" title="Add rewards" />
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
    </div>
  );
};
