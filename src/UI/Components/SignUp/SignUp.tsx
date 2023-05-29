import React, { useState } from "react";
import InputForm from "../Input/Input";
import { SignUpButton } from "./SignUpButton";
import { Select } from "../Select/Select";
import {
  OrganisationFormData,
  IndividualFormData,
  SignUpSelectFormData,
} from "./signUpConfig";

const SignUpSelectForm: React.FC = () => {
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
          SelectFormData={SignUpSelectFormData}
          selectedOption={selectedOption}
          onOptionChange={handleSelectChange}
        />

        <div className="mt-[30px] ">
          {selectedOption === "organisation" && (
            <div>
              <div className="text-white text-sm text-center">
                Please fill the requested information below
              </div>
              <div className="mt-[15px]">
                {OrganisationFormData.map((data, index) => {
                  return (
                    <InputForm
                      key={index}
                      label={data.label}
                      type={data.type}
                    />
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
                {IndividualFormData.map((data, index) => {
                  return <InputForm label={data.label} type={data.type} />;
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

export default SignUpSelectForm;
