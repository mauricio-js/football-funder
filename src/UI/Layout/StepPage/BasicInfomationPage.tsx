import React, { useState } from "react";
import { BasinInformationPagePropsType } from "types";
import {
  CheckBox,
  // CustomizeDatePicker,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
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
  ContactPhoneNumber,
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
  const [selectedCountryOption, setSelectedCountryOption] =
    useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryOption(event.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactOrganistion, setContactOrganisation] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstName, setFirstName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lastName, setLastName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactAddressLine1, setContactAddressLine1] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactAddressLine2, setContactAddressLine2] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactTown, setContactTown] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactPostcode, setContactPostCode] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountEmail, setAccountEmail] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountConfirmPassword, setAccountConfirmPassword] =
    useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountPassword, setAcccountPassword] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [country, setCountry] = useState<string>(ContactPhoneNumber[0].country);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState<string>(
    ContactPhoneNumber[0].randomNumber
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profileURL, setProfileURL] = useState<string>("footballfunder.com");
  const [confirm, setConfirm] = useState<boolean>(false);

  const onHandleConfirm = () => {
    setConfirm(!confirm);
  };

  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[120px] max-ns:mb-30 mx-auto"
    >
      <div className="mt-30">
        <PageTitle title={pageTitle} />
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
                setValue={setContactOrganisation}
                defaultValue=""
              />
            )}
            {!showOrganisation && (
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
                <DatePicker
                  data={DateData}
                  setValue={setDate}
                  defaultValue=""
                />
                {/* <CustomizeDatePicker /> */}
              </div>
            )}
            <DropdownInput
              country={country}
              phoneNumber={phoneNumber}
              selectCountry={setCountry}
              inputPhoneNumber={setPhoneNumber}
              placeholder={phoneNumberPlaceholder}
              setPlaceholder={setPhoneNumberPlaceholder}
            />
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <div className="w-1/2">
                  <Input
                    data={ContactAddressLine1Data}
                    setValue={setContactAddressLine1}
                    defaultValue=""
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    data={ContactAddressLine2Data}
                    setValue={setContactAddressLine2}
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-1/2">
                  <Input
                    data={ContactTownData}
                    setValue={setContactTown}
                    defaultValue=""
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    data={ContactPostcodeData}
                    setValue={setContactPostCode}
                    defaultValue=""
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
              setValue={setAccountEmail}
              defaultValue=""
            />
            <Input
              data={AccountPasswordData}
              setValue={setAcccountPassword}
              defaultValue=""
            />
            <Input
              data={AccountConfirmPasswordData}
              setValue={setAccountConfirmPassword}
              defaultValue=""
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
              setValue={setProfileURL}
              defaultValue="footballfunder.com"
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
    </div>
  );
};
