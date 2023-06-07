import React, { useState } from "react";
import { SignUpButton } from "Pages";
import { Select, Input } from "UI";
import {
  FirstName,
  LastName,
  ContactOrganisation,
  AccountEmail,
  PhoneNumber,
  SignUpSelectFormData,
  WebSite,
} from "Config";

export const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [contactOrganistion, setContactOrganisation] = useState<string>("");
  const [accountEmail, setAccountEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mt-[18px]">
      <div className="text-base font-normal text-center text-green-10">
        Sign up for early access
      </div>
      <div
        className="
                mt-[15px] mx-auto
                w-[390px] md:w-[527px] max-ns:w-full max-ns:px-5
              "
      >
        <Select
          backgroundColor="bg-green-80"
          onOptionChange={handleSelectChange}
          placeholder="text-white"
          placeholderText="Select your category"
          SelectFormData={SignUpSelectFormData}
          selectedOption={selectedOption}
          textColor="text-white"
          textSize="generalSmallText"
        />

        <div className="mt-30 ">
          {selectedOption === "organisation" && (
            <div>
              <div className="text-white text-sm text-center">
                Please fill the requested information below
              </div>
              <div className="mt-[15px]">
                <div className="flex flex-col gap-y-[10px]">
                  <Input
                    data={FirstName}
                    setValue={setFirstName}
                    defaultValue={firstName}
                  />
                  <Input
                    data={LastName}
                    setValue={setLastName}
                    defaultValue={lastName}
                  />
                  <Input
                    data={ContactOrganisation}
                    setValue={setContactOrganisation}
                    defaultValue={contactOrganistion}
                  />
                  <Input
                    data={AccountEmail}
                    setValue={setAccountEmail}
                    defaultValue={accountEmail}
                  />
                  <Input
                    data={PhoneNumber}
                    setValue={setPhoneNumber}
                    defaultValue={phoneNumber}
                  />
                  <Input
                    data={WebSite}
                    setValue={setWebsite}
                    defaultValue={website}
                  />
                </div>

                <div className="mt-30">
                  <SignUpButton />
                </div>
              </div>
            </div>
          )}
          {selectedOption === "individual" && (
            <div>
              <div className="text-white text-sm text-center">
                Please fill the requested information below
              </div>
              <div className="mt-[15px]">
                <div className="flex flex-col gap-y-[10px]">
                  <Input
                    data={FirstName}
                    setValue={setFirstName}
                    defaultValue={firstName}
                  />
                  <Input
                    data={LastName}
                    setValue={setLastName}
                    defaultValue={lastName}
                  />
                  <Input
                    data={AccountEmail}
                    setValue={setAccountEmail}
                    defaultValue={accountEmail}
                  />
                  <Input
                    data={PhoneNumber}
                    setValue={setPhoneNumber}
                    defaultValue={phoneNumber}
                  />
                </div>

                <div className="mt-30">
                  <SignUpButton />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
