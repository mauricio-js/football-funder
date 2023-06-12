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
  Textarea,
} from "UI";
import { AvailableNumberData, DeliveryData, DispatchDateData } from "Config";
import { StepNumberPropsType } from "types";

export const AddRewardsSecondPage: React.FC<StepNumberPropsType> = ({
  stepNumber,
}) => {
  const [fundraiserAmount, setFundraiserAmount] = useState<number>(60);
  const [availableNumber, setAvailableNumber] = useState<string>("");
  const [limit, setLimit] = useState<boolean>(false);
  const [delivery, setDelivery] = useState<string>("no");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dispatchDate, setDispatchDate] = useState<string>("");
  const onHandleConfirm = () => {
    setLimit(!limit);
  };
  return (
    <div className="w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5 mb-[90px] max-ns:mb-30 mx-auto">
      <div className="flex max-sm:flex-col max-sm:items-start justify-between items-center">
        <PageTitle title="Create your fundraiser" />
        <button className="generalSmallText text-green-70">
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
              limit={150}
              height="h-[150px]"
              value="The subheader for running a fundraiser campaign for my football club goes here and there’s three lines of copy available to describe it. There’s some additional space in this box if I need it."
              showLeftCharacters={true}
            />
          </div>
        </div>
        <div>
          <PageSectionTitle title="How many are available?" />
          <div className="mt-15 flex gap-30">
            <Input
              data={AvailableNumberData}
              setValue={setAvailableNumber}
              defaultValue={availableNumber}
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
              height="h-[350px] max-ns:h-[390px] "
              value={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem."
              }
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
              defaultValue=""
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
    </div>
  );
};
