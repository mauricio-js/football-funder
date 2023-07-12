import React from "react";
import {
  Button,
  DatePicker,
  DropdownInput,
  GeneralCheckBoxList,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  VerticalCardLabel,
  StepLabel,
} from "UI";
import {
  AccountEmailData,
  AccountPasswordData,
  AccountConfirmPasswordData,
  AddressData,
  ContactPhoneNumberData,
  ContactPostcodeData,
  DateData,
  SaleAccountConfirm,
  SaleClubLabel,
  SaleLocationLabel,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";
import { LivePagePropsType } from "types";

export const LivePageStep1: React.FC<LivePagePropsType> = ({
  handleNextPage,
  handlePrevPage,
  introTitle,
  pageTitle,
}) => {
  return (
    <form>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[150px] max-ns:mb-[100px] mx-auto"
      >
        <div className="mt-30">
          <PageTitle title={pageTitle} />
        </div>
        <div className="mt-6">{/* <StepperBackButton /> */}</div>
        <div className="mt-9">
          <PageSectionTitle title={introTitle} />
          <div className="mt-2.5">
            <div className="flex flex-row max-vs:flex-col gap-2.5">
              <VerticalCardLabel cardLabelData={SaleClubLabel} />
              <VerticalCardLabel cardLabelData={SaleLocationLabel} />
            </div>
          </div>
        </div>
        <div className="mt-30">
          <StepLabel number="Step 1" title="Create your account" />
        </div>
        <div className="mt-30">
          <PageSectionTitle
            title="Personal information"
            intro="Please provide your personal details in order to create you an account and donate."
          />
          <div className="mt-[15px] xs:w-[500px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <Input data={FirstNameData} name="first_name" />
                <Input data={LastNameData} name="last_name" />

                <DatePicker data={DateData} name="birth" />
              </div>
              <DropdownInput
                data={ContactPhoneNumberData}
                name="phone_number"
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input data={ContactPostcodeData} name="post_code" />
                  </div>
                  <div className="w-1/2">
                    <Input data={AddressData} name="address" />
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
            <Input data={AccountConfirmPasswordData} name="confirm_password" />
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle title="Confirmation" />
          <div className="mt-[15px]">
            <GeneralCheckBoxList
              options={SaleAccountConfirm}
              textStyle="introText"
              name="confirm"
            />
          </div>
        </div>
        <div className="xs:mt-[60px] mt-30">
          <div className="flex xs:justify-end max-xs:flex-col gap-2.5">
            <div className="xs:w-[250px]">
              <Button
                backgroundColor="bg-white"
                height="h-[50px]"
                width="w-full"
                border="border border-[1px] border-green-70"
                text="I already have an account"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
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
    </form>
  );
};
