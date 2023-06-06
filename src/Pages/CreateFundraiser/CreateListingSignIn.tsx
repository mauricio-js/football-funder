import React, { useState } from "react";
import {
  CheckBox,
  DropdownInput,
  Input,
  PageTitle,
  PageSectionTitle,
  Select,
  StepLabel,
} from "UI";
import {
  AccountEmail,
  AccountConfirmPassword,
  AccountPassword,
  ContactAddressLine1,
  ContactAddressLine2,
  ContactOrganisation,
  ContactPostcode,
  ContactTown,
  RegionData,
} from "Config";

export const CreateListingSignIn = () => {
  const [contactAddressLine1, setContactAddressLine1] = useState<string>("");
  const [contactAddressLine2, setContactAddressLine2] = useState<string>("");
  const [accountEmail, setAccountEmail] = useState<string>("");
  const [accountConfirmPassword, setAccountConfirmPassword] =
    useState<string>("");
  const [accountPassword, setAcccountPassword] = useState<string>("");
  const [contactOrganistion, setContactOrganisation] = useState<string>("");
  const [contactPostcode, setContactPostCode] = useState<string>("");
  const [contactTown, setContactTown] = useState<string>("");
  const [selectedCountryOption, setSelectedCountryOption] =
    useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);

  const onHandleConfirm = () => {
    setConfirm(!confirm);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryOption(event.target.value);
  };
  // console.log(
  //   contactAddressLine1,
  //   contactAddressLine2,
  //   accountEmail,
  //   accountConfirmPassword,
  //   accountPassword,
  //   contactOrganistion,
  //   contactPostcode,
  //   contactTown,
  //   selectedCountryOption
  // );
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-[20px] mt-[60px] max-ns:mt-[20px]
        mb-[60px] max-ns:mb-[30px] mx-auto"
    >
      <div>
        <PageTitle title="Create your listing" />
        <div className="mt-[30px]">
          <StepLabel step="Step 2" title="Organisation information" />
        </div>

        <div className="flex flex-col gap-[15px]">
          <PageSectionTitle
            title="Contact"
            intro="Please provide the details of the organisation that you are listing advertising opportunities for."
          />
          <div className="mt-[30px]">
            <div className="w-full">
              <div className="md:w-1/2 flex flex-col gap-y-3">
                <Input
                  data={ContactOrganisation}
                  setValue={setContactOrganisation}
                  defaultValue={contactOrganistion}
                />
                <DropdownInput />
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactAddressLine1}
                      setValue={setContactAddressLine1}
                      defaultValue={contactAddressLine1}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={ContactAddressLine2}
                      setValue={setContactAddressLine2}
                      defaultValue={contactAddressLine2}
                    />
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactTown}
                      setValue={setContactTown}
                      defaultValue={contactTown}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={ContactPostcode}
                      setValue={setContactPostCode}
                      defaultValue={contactPostcode}
                    />
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
        </div>
        <div>
          <PageSectionTitle title="Account details" />
          <div className="mt-[15px] md:w-1/2 flex flex-col gap-[10px]">
            <Input
              data={AccountEmail}
              setValue={setAccountEmail}
              defaultValue={accountEmail}
            />
            <Input
              data={AccountPassword}
              setValue={setAcccountPassword}
              defaultValue={accountPassword}
            />
            <Input
              data={AccountConfirmPassword}
              setValue={setAccountConfirmPassword}
              defaultValue={accountConfirmPassword}
            />
          </div>
        </div>
        <div>
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
      </div>
    </div>
  );
};
