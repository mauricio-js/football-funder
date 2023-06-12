import React, { useState } from "react";
import { SignUpButton } from "Pages";
import { Select, Input } from "UI";
import {
  FirstNameData,
  LastNameData,
  ContactOrganisationData,
  AccountEmailData,
  PhoneNumberData,
  SignUpSelectFormData,
  WebSiteData,
} from "Config";

export const SignUp: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstName, setFirstName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lastName, setLastName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactOrganistion, setContactOrganisation] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountEmail, setAccountEmail] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                    data={FirstNameData}
                    setValue={setFirstName}
                    defaultValue=""
                  />
                  <Input
                    data={LastNameData}
                    setValue={setLastName}
                    defaultValue=""
                  />
                  <Input
                    data={ContactOrganisationData}
                    setValue={setContactOrganisation}
                    defaultValue=""
                  />
                  <Input
                    data={AccountEmailData}
                    setValue={setAccountEmail}
                    defaultValue=""
                  />
                  <Input
                    data={PhoneNumberData}
                    setValue={setPhoneNumber}
                    defaultValue=""
                  />
                  <Input
                    data={WebSiteData}
                    setValue={setWebsite}
                    defaultValue=""
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
                    data={FirstNameData}
                    setValue={setFirstName}
                    defaultValue=""
                  />
                  <Input
                    data={LastNameData}
                    setValue={setLastName}
                    defaultValue=""
                  />
                  <Input
                    data={AccountEmailData}
                    setValue={setAccountEmail}
                    defaultValue=""
                  />
                  <Input
                    data={PhoneNumberData}
                    setValue={setPhoneNumber}
                    defaultValue=""
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
