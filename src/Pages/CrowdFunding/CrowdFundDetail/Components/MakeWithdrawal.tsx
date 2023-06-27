import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CROWDFUNDDETAILLIVEMENU_URL } from "Lib";

import {
  Button,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepLabel,
  StepperBackButton,
  Template,
} from "UI";

import {
  AccountNumberData,
  SortCodeData,
  AddressData,
  ContactPhoneNumberData,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";

export const MakeWithdrawal: React.FC = () => {
  const navigate = useNavigate();

  const [selectedCountryOption, setSelectedCountryOption] =
    useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryOption(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstName, setFirstName] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lastName, setLastName] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [addresss, setAddress] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountNumber, setAccountNumber] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortCode, setSortCode] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [country, setCountry] = useState<string>(
    ContactPhoneNumberData[0].country
  );

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState<string>(
    ContactPhoneNumberData[0].randomNumber
  );

  return (
    <Template>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[150px] max-ns:mb-[100px] mx-auto"
      >
        <div className="mt-30">
          <PageTitle title="Make a withdrawal" />
        </div>
        <div className="mt-6">
          <StepperBackButton
            handleBackPage={() => navigate(CROWDFUNDDETAILLIVEMENU_URL)}
          />
        </div>

        <div className="mt-5">
          <StepLabel number="Step 1" title="Account holder information" />
        </div>
        <div className="xs:w-[500px]">
          <div className="mt-30">
            <PageSectionTitle title="Withdrawal amount" />
            <div className="mt-15 flex justify-between rounded-10 bg-gray-20 p-15">
              <div className="introText">Amount</div>
              <div className="mt-[5px] buttonText text-green-70">￡45.00</div>
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle title="Details" />
            <div className="mt-[15px]">
              <div className="flex flex-col gap-[10px]">
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
                  <DropdownInput
                    country={country}
                    data={ContactPhoneNumberData}
                    phoneNumber={phoneNumber}
                    selectCountry={setCountry}
                    inputPhoneNumber={setPhoneNumber}
                    placeholder={phoneNumberPlaceholder}
                    setPlaceholder={setPhoneNumberPlaceholder}
                  />

                  <Input
                    data={AddressData}
                    setValue={setAddress}
                    defaultValue=""
                  />
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
          <div className="mt-30">
            <PageSectionTitle title="Account" />
            <div className="mt-5 flex flex-col gap-[10px]">
              <Input
                data={AccountNumberData}
                setValue={setAccountNumber}
                defaultValue=""
              />
              <Input
                data={SortCodeData}
                setValue={setSortCode}
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className="xs:mt-[60px] mt-30">
          <div className="flex xs:justify-end">
            <div className="xs:w-[250px] w-full">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Make withdrawal"
                textColor="text-green-70"
                textSize="buttonText"
                // handleClick={handleNextPage}
              />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
