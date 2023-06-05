import React, { useState } from "react";
import { SignUpButton } from "Pages";
import { Select, Input } from "UI";
import {
  OrganisationFormData,
  IndividualFormData,
  SignUpSelectFormData,
} from "Config";

export const SignUp: React.FC = () => {
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

        <div className="mt-[30px] ">
          {selectedOption === "organisation" && (
            <div>
              <div className="text-white text-sm text-center">
                Please fill the requested information below
              </div>
              <div className="mt-[15px]">
                {OrganisationFormData.map((Data, index) => {
                  return (
                    <div key={index} className="mt-[10px]">
                      <Input key={index} data={Data} />
                    </div>
                  );
                })}
                <div className="mt-[30px]">
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
                {IndividualFormData.map((Data, index) => {
                  return (
                    <div className="mt-[10px]">
                      <Input key={index} data={Data} />
                    </div>
                  );
                })}
                <div className="mt-[30px]">
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
