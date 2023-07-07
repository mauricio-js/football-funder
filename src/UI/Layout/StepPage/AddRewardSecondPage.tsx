import React, { useState } from "react";
import {
  Button,
  CheckBox,
  DatePicker,
  Input,
  PageSectionTitle,
  PageTitle,
  RadioButtonList,
  AmountShow,
  StepLabel,
  StepperBackButton,
  Textarea,
} from "UI";
import { AvailableNumberData, DeliveryData, DispatchDateData } from "Config";
import { StepPagePropsType } from "types";

export const AddRewardsSecondPage: React.FC<StepPagePropsType> = ({
  handleNextPage,
  handlePrevPage,
  pageTitle,
  stepNumber,
}) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const [fundraiserAmount, setFundraiserAmount] = useState<number>(60);

  const [limit, setLimit] = useState<boolean>(false);

  const [delivery, setDelivery] = useState<string>("no");

  const [dispatchDate, setDispatchDate] = useState<Date | null>(null);
  const onHandleConfirm = () => {
    setLimit(!limit);
  };
  return (
    <form>
      <div className="w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5 mb-[90px] max-ns:mb-30 mx-auto">
        <div className="flex  justify-between items-center">
          <PageTitle title={pageTitle} />
          <button className="max-sm:hidden generalSmallText text-green-70">
            Skip adding rewards
          </button>
        </div>
        <div className="mt-15 flex justify-between items-center">
          <StepperBackButton handleBackPage={handlePrevPage} />
          <button className="sm:hidden generalSmallText text-green-70">
            Skip adding rewards
          </button>
        </div>
        <div className="mt-30 ">
          <StepLabel number={stepNumber} title="Add rewards" />
        </div>
        <div className="mt-30">
          <PageSectionTitle intro="Give your supporters something back by offering rewards for a certain donation amount. The number of rewards you can offer is unlimited." />
        </div>
        <div className="mt-30 xs:w-[500px] flex flex-col gap-30">
          <div>
            <PageSectionTitle title="Reward title" />
            <div className="mt-15">
              <Textarea
                title="Reward title"
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                limit={150}
                height="h-[80px]"
                value="Early Bird Special"
                showLeftCharacters={true}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle title="Donation amount to qualify" />
            <div className="mt-15">
              <AmountShow
                amount={fundraiserAmount}
                setAmount={setFundraiserAmount}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle title="Reward description" />
            <div className="mt-[15px]">
              <Textarea
                title="Short description"
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                limit={150}
                height="h-[150px]"
                showLeftCharacters={true}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle title="How many are available?" />
            <div className="mt-15 flex gap-30">
              <Input
                data={AvailableNumberData}
                name="limit"
                onChange={handleInputChange}
                value={formValues.limit || ""}
              />
              <CheckBox
                align="flex-row-reverse gap-[10px]"
                checked={limit}
                label="Unlimited"
                onSelect={onHandleConfirm}
                value="checked"
                textClass="generalText text-green-70"
              />
            </div>
          </div>
          <div>
            <PageSectionTitle
              title="Additional info (optional)"
              intro="Use this section for any unique information about the reward."
            />
            <div className="mt-15">
              <Textarea
                titleStyle=""
                height="h-[350px] max-ns:h-[390px] "
                // value={}
                showLeftCharacters={false}
                title="Description"
              />
            </div>
          </div>
          <div className="">
            <PageSectionTitle
              title="Delivery"
              intro="Does this reward require delivery?"
            />
            <div className="mt-15">
              <RadioButtonList
                options={DeliveryData}
                currentValue={delivery}
                onSelect={setDelivery}
                classes="flex gap-30"
                textStyle="text-base"
                checkboxStyle={false}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle
              title="Estimated dispatch date"
              intro="When can a support expect their reward to be sent?"
            />
            <div className="mt-15">
              <DatePicker
                data={DispatchDateData}
                setValue={setDispatchDate}
                value={dispatchDate}
              />
            </div>
          </div>
          <div>
            <Button
              backgroundColor="bg-green-70"
              height="h-[50px]"
              width="w-full"
              textColor="text-white"
              textSize="text-[16px] leading-[20px] font-semibold"
              text="Add another reward"
            />
          </div>
        </div>
        <div className="xs:mt-[60px] mt-30">
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
    </form>
  );
};
