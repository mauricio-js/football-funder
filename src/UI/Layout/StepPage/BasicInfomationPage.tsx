import React, { useState } from "react";
import { BasinInformationPagePropsType } from "types";
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
  ContactOrganisationData,
  ContactPhoneNumberData,
  ContactPostcodeData,
  ContactTownData,
  DateData,
  FirstNameData,
  LastNameData,
  ProfileURLData,
  RegionData,
} from "Config";
import { MdAnnouncement } from "react-icons/md";

export const BasicInformationPage: React.FC<BasinInformationPagePropsType> = ({
  handleNextPage,
  handlePrevPage,
  isAuth,
  contactText,
  pageTitle,
  showAccountDetails,
  showConfirmation,
  showModifyAlert,
  showOrganisation,
  showProfileURL,
  stepNumber,
  stepTitle,
}) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const [selectedCountryOption, setSelectedCountryOption] =
    useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryOption(event.target.value);
  };

  const [date, setDate] = useState<Date | null>(null);

  const [country, setCountry] = useState<string>(
    ContactPhoneNumberData[0].country
  );

  const [confirm, setConfirm] = useState<boolean>(false);

  const onHandleConfirm = () => {
    setConfirm(!confirm);
  };

  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[120px] max-ns:mb-[60px] mx-auto"
    >
      <div className="mt-30">
        <PageTitle title={pageTitle} />
      </div>
      <div className="mt-15">
        <StepperBackButton handleBackPage={handlePrevPage} />
      </div>
      <div className="mt-30">
        <StepLabel number={stepNumber} title={stepTitle} />
      </div>

      <div className="mt-30">
        <PageSectionTitle title="Contact" intro={contactText} />
        <div className="mt-[15px] xs:w-[500px]">
          <div className="flex flex-col gap-[10px]">
            {showOrganisation && (
              <Input
                data={ContactOrganisationData}
                name="organisation"
                onChange={handleInputChange}
                value={formValues.organisation || ""}
              />
            )}
            {!showOrganisation && (
              <div className="flex flex-col gap-[10px]">
                <Input
                  data={FirstNameData}
                  name="firstName"
                  onChange={handleInputChange}
                  value={formValues.firstName || ""}
                />
                <Input
                  data={LastNameData}
                  name="lastName"
                  onChange={handleInputChange}
                  value={formValues.lastName || ""}
                />
                {/* <DatePicker
                  data={DateData}
                  setValue={setDate}
                  value=""
                /> */}
                <DatePicker data={DateData} setValue={setDate} value={date} />
              </div>
            )}
            <DropdownInput
              country={country}
              data={ContactPhoneNumberData}
              selectCountry={setCountry}
              name="phone_number"
              onChange={handleInputChange}
              value={formValues.phone_number || ""}
            />
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <div className="w-1/2">
                  <Input
                    data={ContactAddressLine1Data}
                    name="address_line1"
                    onChange={handleInputChange}
                    value={formValues.address_line1 || ""}
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    data={ContactAddressLine2Data}
                    name="address_line2"
                    onChange={handleInputChange}
                    value={formValues.address_line2 || ""}
                  />
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-1/2">
                  <Input
                    data={ContactTownData}
                    name="city"
                    onChange={handleInputChange}
                    value={formValues.city || ""}
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    data={ContactPostcodeData}
                    name="postcode"
                    onChange={handleInputChange}
                    value={formValues.postcode || ""}
                  />
                </div>
              </div>
            </div>
            <div>
              <Select
                backgroundColor="bg-white"
                border="border-[1px] border-gray-300"
                onOptionChange={handleSelectChange}
                placeholder="text-gray-500"
                placeholderText="Country (Region)"
                SelectFormData={RegionData}
                selectedOption={selectedCountryOption}
                textColor="text-green-70"
                textSize="generalText"
              />
            </div>
          </div>
        </div>
      </div>
      {showAccountDetails && (
        <div className="mt-30 xs:w-[500px]">
          <PageSectionTitle title="Account details" />
          <div className="mt-5 flex flex-col gap-[10px]">
            <Input
              data={AccountEmailData}
              name="email"
              onChange={handleInputChange}
              value={formValues.email || ""}
            />
            <Input
              data={AccountPasswordData}
              name="password"
              onChange={handleInputChange}
              value={formValues.password || ""}
            />
            <Input
              data={AccountConfirmPasswordData}
              name="confirmPassword"
              onChange={handleInputChange}
              value={formValues.confirmPassword || ""}
            />
          </div>
        </div>
      )}
      {showProfileURL && (
        <div className="mt-30 md:w-[630px]">
          <PageSectionTitle
            title="Profile URL"
            intro="Each club and organisation signed up to Football Funder is given their own profile page to share their fundraisers and advertising or sponsorship listings from one place. "
          />
          <div className="mt-7 introText">
            Enter your preferred subdomain name below:
          </div>
          <div className="mt-[35px] xs:w-[500px]">
            <Input
              data={ProfileURLData}
              name="profile_url"
              onChange={handleInputChange}
              value={formValues.profile_url || ""}
            />
          </div>
        </div>
      )}
      {showConfirmation && (
        <div className="mt-30">
          <PageSectionTitle title="Confirmation" />
          <div className="mt-[15px]">
            <CheckBox
              align="flex-row-reverse gap-[10px]"
              checked={confirm}
              label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
              onSelect={onHandleConfirm}
              value="checked"
              textClass="generalSmallText text-gray-500"
            />
          </div>
        </div>
      )}
      {showModifyAlert && (
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
      )}
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
