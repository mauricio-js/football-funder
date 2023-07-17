import React from "react";
import {
  Button,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepperBackButton,
  StepLabel,
} from "UI";
import {
  AccountEmailData,
  AccountPasswordData,
  AccountConfirmPasswordData,
  ContactAddressLine1Data,
  ContactAddressLine2Data,
  ContactOrganisationData,
  ContactPhoneNumberData,
  ContactPostcodeData,
  ContactTownData,
  ProfileURLData,
  RegionData,
} from "Config";
import { StepperActionPropsType } from "types";

export const AdvertisingSignUpSecondStep: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
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
            <Input data={ContactOrganisationData} name="organisation" />

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
      <div className="mt-30 md:w-[630px]">
        <PageSectionTitle
          title="Profile URL"
          intro="Each club and organisation signed up to Football Funder is given their own profile page to share their fundraisers and advertising or sponsorship listings from one place. "
        />
        <div className="mt-7 introText">
          Enter your preferred subdomain name below:
        </div>
        <div className="mt-[35px] xs:w-[500px]">
          <Input data={ProfileURLData} name="profile_url" />
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
