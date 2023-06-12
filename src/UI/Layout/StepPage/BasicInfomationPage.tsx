import React, { useState } from "react";
import { StepPagePropsType } from "types";
import {
  CheckBox,
  Input,
  DropdownInput,
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
  RegionData,
} from "Config";
import { MdAnnouncement } from "react-icons/md";

export const BasicInformationPage: React.FC<StepPagePropsType> = ({
  isAuth,
  contactText,
  organisation,
  stepNumber,
  stepTitle,
}) => {
  const [selectedCountryOption, setSelectedCountryOption] =
    useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryOption(event.target.value);
  };
  const [contactOrganistion, setContactOrganisation] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [contactAddressLine1, setContactAddressLine1] = useState<string>("");
  const [contactAddressLine2, setContactAddressLine2] = useState<string>("");
  const [contactTown, setContactTown] = useState<string>("");
  const [contactPostcode, setContactPostCode] = useState<string>("");
  const [accountEmail, setAccountEmail] = useState<string>("");
  const [accountConfirmPassword, setAccountConfirmPassword] =
    useState<string>("");
  const [accountPassword, setAcccountPassword] = useState<string>("");
  const [country, setCountry] = useState<string>(ContactPhoneNumber[0].country);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState<string>(
    ContactPhoneNumber[0].randomNumber
  );
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
        <PageTitle title="Create your listing" />
      </div>
      <div className="mt-30">
        <StepLabel number={stepNumber} title={stepTitle} />
      </div>

      <div className="mt-30">
        <PageSectionTitle title="Contact" intro={contactText} />
        <div className="mt-[15px] xs:w-[500px]">
          <div className="flex flex-col gap-[10px]">
            {!isAuth && organisation && (
              <Input
                data={ContactOrganisationData}
                setValue={setContactOrganisation}
                defaultValue={contactOrganistion}
              />
            )}
            {!organisation && (
              <div className="flex flex-col gap-[10px]">
                <Input
                  data={FirstNameData}
                  setValue={setFirstName}
                  defaultValue={firstName}
                />
                <Input
                  data={LastNameData}
                  setValue={setLastName}
                  defaultValue={lastName}
                />
              </div>
            )}
            <DatePicker
              data={DateData}
              setValue={setDate}
              defaultValue={date}
            />
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
                    defaultValue={contactAddressLine1}
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    data={ContactAddressLine2Data}
                    setValue={setContactAddressLine2}
                    defaultValue={contactAddressLine2}
                  />
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-1/2">
                  <Input
                    data={ContactTownData}
                    setValue={setContactTown}
                    defaultValue={contactTown}
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    data={ContactPostcodeData}
                    setValue={setContactPostCode}
                    defaultValue={contactPostcode}
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
      <div className="mt-30 xs:w-[500px]">
        <PageSectionTitle title="Account details" />
        <div className="mt-5 flex flex-col gap-[10px]">
          <Input
            data={AccountEmailData}
            setValue={setAccountEmail}
            defaultValue={accountEmail}
          />
          <Input
            data={AccountPasswordData}
            setValue={setAcccountPassword}
            defaultValue={accountPassword}
          />
          <Input
            data={AccountConfirmPasswordData}
            setValue={setAccountConfirmPassword}
            defaultValue={accountConfirmPassword}
          />
        </div>
      </div>
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
      {!organisation && (
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
