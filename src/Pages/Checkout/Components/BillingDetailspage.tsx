import React, { useState } from "react";
import {
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepLabel,
} from "UI";
import {
  ContactPhoneNumberData,
  AddressData,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";

export const BillingDetailsPage: React.FC = () => {
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
  const [address, setAddresss] = useState<string>("");
  const [country, setCountry] = useState<string>(
    ContactPhoneNumberData[0].country
  );

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState<string>(
    ContactPhoneNumberData[0].randomNumber
  );
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[200px] max-ns:mb-30 mx-auto"
    >
      <PageTitle title="Checkout" />
      <div className="mt-30">
        <StepLabel number="Step 2" title="Billing details" />

        <div className="mt-30 xs:w-[500px]">
          <PageSectionTitle title="Details" />
          <div className="mt-15 flex flex-col gap-2.5">
            <Input
              data={FirstNameData}
              setValue={setFirstName}
              defaultValue=""
            />
            <Input data={LastNameData} setValue={setLastName} defaultValue="" />
            <DropdownInput
              country={country}
              data={ContactPhoneNumberData}
              phoneNumber={phoneNumber}
              selectCountry={setCountry}
              inputPhoneNumber={setPhoneNumber}
              placeholder={phoneNumberPlaceholder}
              setPlaceholder={setPhoneNumberPlaceholder}
            />
            <Input data={AddressData} setValue={setAddresss} defaultValue="" />
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
  );
};
