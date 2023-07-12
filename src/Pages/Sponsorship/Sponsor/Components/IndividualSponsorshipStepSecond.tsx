import React from "react";
import {
  Button,
  CheckBox,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepperBackButton,
  StepLabel,
  DatePicker,
} from "UI";
import {
  AccountEmailData,
  AccountPasswordData,
  AccountConfirmPasswordData,
  ContactAddressLine1Data,
  ContactAddressLine2Data,
  ContactPhoneNumberData,
  ContactPostcodeData,
  ContactTownData,
  DateData,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";
import { MdAnnouncement } from "react-icons/md";
import { StepperActionPropsType } from "types";

export const IndividualSponsorshipStepSecond: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[120px] max-ns:mb-[60px] mx-auto"
    >
      <div className="mt-30">
        <PageTitle title="Create your listing" />
      </div>
      <div className="mt-15">
        <StepperBackButton handleBackPage={handlePrevPage} />
      </div>
      <div className="mt-30">
        <StepLabel number="Step 2" title="Organisation information" />
      </div>

      <div className="mt-30">
        <PageSectionTitle
          title="Contact"
          intro="Please provide the details of the organisation that you are listing advertising opportunities for."
        />
        <div className="mt-[15px] xs:w-[500px]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[10px]">
              <Input data={FirstNameData} name="firstName" />
              <Input data={LastNameData} name="lastName" />
              <DatePicker data={DateData} name="birth" />
            </div>
            <DropdownInput data={ContactPhoneNumberData} name="phone_number" />
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <div className="w-1/2">
                  <Input data={ContactAddressLine1Data} name="address_line1" />
                </div>
                <div className="w-1/2">
                  <Input data={ContactAddressLine2Data} name="address_line2" />
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-1/2">
                  <Input data={ContactTownData} name="city" />
                </div>
                <div className="w-1/2">
                  <Input data={ContactPostcodeData} name="postcode" />
                </div>
              </div>
            </div>
            <div>
              <Select
                backgroundColor="bg-white"
                name="country"
                label="Country (Region)"
                SelectFormData={RegionData}
                textSize="generalText"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-30 xs:w-[500px]">
        <PageSectionTitle title="Account details" />
        <div className="mt-5 flex flex-col gap-[10px]">
          <Input data={AccountEmailData} name="email" />
          <Input data={AccountPasswordData} name="password" />
          <Input data={AccountConfirmPasswordData} name="confirmPassword" />
        </div>
      </div>

      <div className="mt-30">
        <PageSectionTitle title="Confirmation" />
        <div className="mt-[15px]">
          <CheckBox
            align="flex-row-reverse gap-[10px]"
            label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
            value={0}
            textClass="generalSmallText text-gray-500"
            name="confirm"
          />
        </div>
      </div>
      <div className="md:w-[500px] mt-30">
        <div
          className="px-15 xs:py-[15px] py-2 w-full bg-gray-200 rounded-10 
              flex items-center gap-[10px] generalSmallText text-green-80"
        >
          <div className="w-[14px] h-[14px]">
            <MdAnnouncement />
          </div>
          You can modify your fundraiser details at any time after posting.
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
