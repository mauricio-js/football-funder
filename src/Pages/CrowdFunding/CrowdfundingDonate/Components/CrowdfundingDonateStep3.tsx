import React, { useState } from "react";
import {
  Button,
  Input,
  PageSectionTitle,
  PageTitle,
  RadioButtonList,
  StepperBackButton,
  StepLabel,
  Textarea,
  VerticalCardLabel,
} from "UI";
import {
  AccountEmailData,
  DonateClubLabel,
  DonateLocationLabel,
  FirstNameData,
  LastNameData,
  SelectAnonymous,
} from "Config";
import { StepperActionPropsType } from "types";

export const CrowdfundingDonateStep3: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstName, setFirstName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lastName, setLastName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountEmail, setAccountEmail] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountConfirmPassword, setAccountConfirmPassword] =
    useState<string>("");
  const [anonymous, setAnonymous] = useState<string>("no");
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[150px] max-ns:mb-[100px] mx-auto"
    >
      <div className="mt-30">
        <PageTitle title="Donate to this fundraiser" />
      </div>
      <div className="mt-6">
        <StepperBackButton handleBackPage={handlePrevPage} />
      </div>
      <div className="mt-9">
        <PageSectionTitle title="Running a crowdfunding campaign for my football club" />
        <div className="mt-2.5">
          <div className="flex flex-row max-vs:flex-col gap-2.5">
            <VerticalCardLabel cardLabelData={DonateClubLabel} />
            <VerticalCardLabel cardLabelData={DonateLocationLabel} />
          </div>
        </div>
      </div>
      <div className="mt-30">
        <StepLabel number="Step 3" title="Privacy and details" />
      </div>
      <div className="xs:w-[500px]">
        <div className="mt-30">
          <PageSectionTitle title="Your details" />
          <div className="mt-5 ">
            <div className="flex flex-col gap-[10px]">
              <Input
                data={FirstNameData}
                setValue={setFirstName}
                defaultValue=""
              />
              <Input
                data={LastNameData}
                setValue={setLastName}
                defaultValue=""
              />
              <Input
                data={AccountEmailData}
                setValue={setAccountEmail}
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle title="Privacy" />
          <div className="mt-5">
            <RadioButtonList
              options={SelectAnonymous}
              currentValue={anonymous}
              onSelect={setAnonymous}
              classes="flex gap-30"
              textStyle="text-base"
              checkboxStyle={false}
            />
          </div>
          <div className="mt-15 smallIntroText">
            Not possible to leave a comment if you wish to remain anonymous.
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle title="Leave a comment" />
          <div className="mt-15">
            <Textarea
              title="Your comment"
              titleStyle="text-[12px] leading-[14px] font-medium text-gray-10"
              height="h-[150px]"
              limit={300}
              showLeftCharacters={true}
            />
          </div>
        </div>
      </div>
      <div className="xs:mt-[60px] mt-30">
        <div className="flex xs:justify-end max-xs:flex-col">
          <div className="xs:w-[250px]">
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
