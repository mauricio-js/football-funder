import React, { useState } from "react";
import InputForm from "../Input/Input";
import { SignUpButton } from "./SignUpButton";
import { Select } from "../Select/Select";

const SignUpSelectForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  interface SignUpOption {
    id: number;
    label: string;
    value: string;
  }

  interface FormDataType {
    id: number;
    label: string;
    type: string;
  }

  const signUpSelectFormData: SignUpOption[] = [
    {
      id: 1,
      label: "Organisation",
      value: "organisation",
    },
    {
      id: 2,
      label: "Individual",
      value: "individual",
    },
  ];

  const organisationFormData: FormDataType[] = [
    {
      id: 1,
      label: "First Name",
      type: "text",
    },
    {
      id: 2,
      label: "Last Name",
      type: "text",
    },
    {
      id: 3,
      label: "Organisation Name",
      type: "text",
    },
    {
      id: 4,
      label: "Email",
      type: "email",
    },
    {
      id: 5,
      label: "Phone Number",
      type: "tel",
    },
    {
      id: 6,
      label: "Website",
      type: "tel",
    },
  ];
  const individualFormData: FormDataType[] = [
    {
      id: 1,
      label: "First Name",
      type: "text",
    },
    {
      id: 2,
      label: "Last Name",
      type: "text",
    },
    {
      id: 3,
      label: "Email",
      type: "email",
    },
    {
      id: 4,
      label: "Phone Number",
      type: "tel",
    },
  ];

  return (
    <div className="mt-[18px]">
      <div className="text-base leading-[22px] font-normal text-center text-green-10">
        Sign up for early access
      </div>
      <div
        className="
                mt-[15px] mx-auto
                w-[390px] md:w-[527px] max-ns:w-full max-ns:px-5
              "
      >
        <Select
          SelectFormData={signUpSelectFormData}
          selectedOption={selectedOption}
          onOptionChange={handleSelectChange}
        />

        <div className="mt-[30px] ">
          <div className="text-white text-sm text-center">
            Please fill the requested information below
          </div>
          {selectedOption === "organisation" && (
            <div className="mt-[15px]">
              {organisationFormData.map((data, index) => {
                return <InputForm label={data.label} type={data.type} />;
              })}
              <div className="mt-[30px]">
                <SignUpButton />
              </div>
            </div>
          )}
          {selectedOption === "individual" && (
            <div className="mt-[15px]">
              {individualFormData.map((data, index) => {
                return <InputForm label={data.label} type={data.type} />;
              })}
              <div className="mt-[30px]">
                <SignUpButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpSelectForm;
