import React, { useState } from "react";
import {
  Button,
  CheckBox,
  DescriptionPanel,
  Input,
  PageSectionTitle,
  PageTitle,
  RadioButtonList,
  ShowAmount,
  StepLabel,
  Textarea,
} from "UI";
import { AvailableNumberData, DeliveryData, DispatchDateData } from "Config";

export const CreateFundraiserStepFiveth = () => {
  const [availableNumber, setAvailableNumber] = useState<string>("");
  const [limit, setLimit] = useState<boolean>(false);
  const [delivery, setDelivery] = useState<string>("no");
  const [dispatchDate, setDispatchDate] = useState<string>("");
  const onHandleConfirm = () => {
    setLimit(!limit);
  };
  // console.log("delivery", delivery);
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[90px] max-ns:mb-30 mx-auto"
    >
      <div className="flex max-sm:flex-col max-sm:items-start justify-between items-center">
        <PageTitle title="Create your fundraiser" />
        <button className="generalSmallText text-green-70">
          Skip adding rewards
        </button>
      </div>
      <div className="mt-30 w-[500px] max-2xs:w-full flex flex-col gap-30">
        <StepLabel step="Step 5" title="Add rewards" />
        <PageSectionTitle intro="Give your supporters something back by offering rewards for a certain donation amount. The number of rewards you can offer is unlimited." />
        <div>
          <PageSectionTitle title="Reward title" />
          <div className="mt-15">
            <Textarea
              title="Reward title"
              limit={150}
              height="h-[80px]"
              value="Early Bird Special"
            />
          </div>
        </div>
        <div>
          <PageSectionTitle title="Donation amount to qualify" />
          <div className="mt-15">
            <ShowAmount amount="60" classes="h-[54px]" />
          </div>
        </div>
        <div>
          <PageSectionTitle title="Reward description" />
          <div className="mt-[15px]">
            <Textarea
              title="Short description"
              limit={150}
              height="h-[150px]"
              value="The subheader for running a fundraiser campaign for my football club goes here and 
              there’s three lines of copy available to describe it. There’s some additional space in this box if I need it."
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
            <DescriptionPanel
              classes="sm:h-[350px] h-auto text-green-70 generalText"
              introText1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
              introText2="It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem."
            />
          </div>
        </div>
        <div>
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
            <Input
              data={DispatchDateData}
              setValue={setDispatchDate}
              defaultValue={dispatchDate}
            />
          </div>
        </div>
        <div>
          {/* <PageSectionTitle
            title="Estimated dispatch date"
            intro="When can a support expect their reward to be sent?"
          />
          <div className="mt-15">
            <Input
              data={DispatchDateData}
              setValue={setDispatchDate}
              defaultValue={dispatchDate}
            />
          </div> */}
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
