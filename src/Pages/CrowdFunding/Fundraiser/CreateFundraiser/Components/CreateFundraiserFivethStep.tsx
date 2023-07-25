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
import { StepperActionPropsType } from "types";
import { useSelector } from "react-redux";

export const CreateFundraiserFivethStep: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const rewardArray = useSelector((state: any) => state.reward);
  const handleClickAddBtn = () => {
    handlePrevPage();
  };
  const handleClickEditBtn = (value: any) => {};

  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[90px] max-ns:mb-30 mx-auto"
    >
      <div className="flex flex-col gap-30">
        <PageTitle title="Create your fundraiser" />
        {/* <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div> */}
        <StepLabel number="Step 5" title="Add rewards" />
        <PageSectionTitle
          intro="Give your supporters something back by offering rewards for a certain donation amount. 
                The number of rewards you can offer is unlimited."
        />
        {rewardArray.map((item: any, index: number) => {
          return (
            <div key={index}>
              <div className="ns:w-[390px] w-full flex flex-col gap-15">
                <div className="h-[300px] bg-gray-200 rounded-10 p-15">
                  <div className="flex flex-col gap-15">
                    <div className="flex justify-between">
                      <div className="text-[16px] leading-5 font-semibold">
                        {item.reward_title}
                      </div>
                      <div className="flex gap-5">
                        <button
                          onClick={() => {
                            handleClickEditBtn(item.id);
                          }}
                        >
                          <FiEdit2 />
                        </button>
                        <button className="text-red-500" onClick={() => {}}>
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                    <EditPanelItem
                      index="Donation amount"
                      value={item.donation_amount}
                    />
                    <EditPanelItem
                      index="Availability"
                      value={
                        item.available && item.available.includes(1)
                          ? "Unlimited"
                          : "Limited"
                      }
                    />
                    <EditPanelItem
                      index="Ships to"
                      value={
                        item.delivery === 1
                          ? "Shipping needed"
                          : "No shipping needed"
                      }
                    />
                    <EditPanelItem
                      index="Estimated dispatch day"
                      value={`￡ 
                       ${new Date(item.dispatch_date || "").toLocaleDateString(
                         "en-US",
                         {
                           day: "numeric",
                           month: "long",
                           year: "numeric",
                         }
                       )}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="ns:w-[390px] w-full">
          <Button
            backgroundColor="bg-green-70"
            height="h-[50px]"
            width="w-full"
            textColor="text-white"
            textSize="text-[16px] leading-[20px] font-semibold"
            text="Add new reward"
            handleClick={handleClickAddBtn}
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
