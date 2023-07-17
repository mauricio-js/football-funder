import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  EditPanelItem,
  PageSectionTitle,
  PageTitle,
  StepLabel,
} from "UI";
import { FormStepperContext } from "App/FormStepperProvider";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { StepperActionPropsType } from "types";
import { AppState } from "App/reducers";

export const CreateFundraiserFivethStep: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const {
    rewardArray,
    handleDescriptionChange,
    handleAmountChange,
    handleDateChange,
    handleSelectedCheckbox,
    handleSelectInput,
    handleInputChange,
    handleSetCrrRewardId,
    deleteRewardData,
  } = useContext(FormStepperContext);

  const rewardList = useSelector((state: AppState) => state.reward.rewardData);
  const handleClickAddBtn = () => {
    handleInputChange("available_num", "");
    handleDescriptionChange("reward_title", "");
    handleDescriptionChange("reward_additional_info", "");
    handleDescriptionChange("reward_short_description", "");
    handleAmountChange("donation_amount", 0);
    handleDateChange("dispatch_date", null);
    handleSelectedCheckbox("limit", 0);
    handleSelectInput("delivery", 0);
    handlePrevPage();
  };
  const handleClickEditBtn = (value: any) => {
    const willUpdateRewardArray = rewardArray.filter(
      (item: any) => item.id === value
    );

    handleSetCrrRewardId(willUpdateRewardArray[0].id);
    handleInputChange("available_num", willUpdateRewardArray[0].available_num);
    handleDescriptionChange(
      "reward_title",
      willUpdateRewardArray[0].reward_title
    );
    handleDescriptionChange(
      "reward_additional_info",
      willUpdateRewardArray[0].reward_additional_info
    );
    handleDescriptionChange(
      "reward_short_description",
      willUpdateRewardArray[0].reward_short_description
    );
    handleAmountChange(
      "donation_amount",
      willUpdateRewardArray[0].donation_amount
    );
    handleDateChange("dispatch_date", willUpdateRewardArray[0].dispatch_date);
    handleSelectedCheckbox("limit", willUpdateRewardArray[0].limit);
    handleSelectInput("delivery", willUpdateRewardArray[0].delivery);
    handlePrevPage();
  };
  // useEffect(() => {
  //   console.log(rewardList);
  // }, [rewardList]);

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
                        <button
                          className="text-red-500"
                          onClick={() => deleteRewardData(item.id)}
                        >
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
