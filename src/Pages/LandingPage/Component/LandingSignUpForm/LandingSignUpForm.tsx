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

export const LandingSignUpForm: React.FC = () => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form>
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
                      name="first_name"
                      onChange={handleInputChange}
                      value={formValues.first_name}
                    />
                    <Input
                      data={LastNameData}
                      name="last_name"
                      onChange={handleInputChange}
                      value={formValues.last_name || ""}
                    />
                    <Input
                      data={ContactOrganisationData}
                      name="organisation"
                      onChange={handleInputChange}
                      value={formValues.organisation || ""}
                    />
                    <Input
                      data={AccountEmailData}
                      name="email"
                      onChange={handleInputChange}
                      value={formValues.email || ""}
                    />
                    <Input
                      data={PhoneNumberData}
                      name="phone_number"
                      onChange={handleInputChange}
                      value={formValues.phone_number || ""}
                    />
                    <Input
                      data={WebSiteData}
                      name="website_url"
                      onChange={handleInputChange}
                      value={formValues.website_url || ""}
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
                    <Input
                      data={AccountEmailData}
                      name="email"
                      onChange={handleInputChange}
                      value={formValues.email || ""}
                    />
                    <Input
                      data={PhoneNumberData}
                      name="phone_number"
                      onChange={handleInputChange}
                      value={formValues.phone_number || ""}
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
    </form>
  );
};
