import React, { useState } from "react";
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
  ContactPhoneNumberData,
  AddressData,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";
import { StepperActionPropsType } from "types";

export const BillingDetailsPage: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
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

  const [country, setCountry] = useState<string>(
    ContactPhoneNumberData[0].country
  );

  return (
    <form>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[100px] mx-auto"
      >
        <PageTitle title="Checkout" />
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 2" title="Billing details" />

          <div className="mt-30 xs:w-[500px]">
            <PageSectionTitle title="Details" />
            <div className="mt-15 flex flex-col gap-2.5">
              <Input
                data={FirstNameData}
                name="first_name"
                onChange={handleInputChange}
                value={formValues.first_name || ""}
              />
              <Input
                data={LastNameData}
                name="last_name"
                onChange={handleInputChange}
                value={formValues.last_name || ""}
              />
              <DropdownInput
                country={country}
                data={ContactPhoneNumberData}
                selectCountry={setCountry}
                name="phone_number"
                onChange={handleInputChange}
                value={formValues.phone_number || ""}
              />
              <Input
                data={AddressData}
                name="address"
                onChange={handleInputChange}
                value={formValues.address || ""}
              />
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
        <div className="xs:mt-[200px] mt-30">
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
    </form>
  );
};
