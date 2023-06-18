import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContactOrganisationData,
  ContactAddressLine1Data,
  ContactAddressLine2Data,
  ContactPostcodeData,
  ContactTownData,
  RegionData,
} from "Config";
import { Input, PageSectionTitle, Select, UnchangePageTitle } from "UI";
import { SIGNIN_URL } from "Lib";

export const SignUpStepSecond: React.FC = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactOrganistion, setContactOrganisation] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactAddressLine1, setContactAddressLine1] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactAddressLine2, setContactAddressLine2] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactTown, setContactTown] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactPostcode, setContactPostCode] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCountryOption, setSelectedCountryOption] =
    useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryOption(event.target.value);
  };
  const goToSignIn = () => {
    navigate(SIGNIN_URL);
  };
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 sm:mt-[60px] mt-5
       sm:mb-[60px] mb-30 mx-auto"
    >
      <UnchangePageTitle
        title="Create your Football Funder account"
        introText="Already have an account?"
        linkText="Sign in"
        linkFunction={goToSignIn}
      />
      <div className="mt-30">
        <PageSectionTitle
          title="Organisation details"
          intro="Please provide the details of the organisation that you are listing advertising opportunities for."
        />
      </div>
      <div className="mt-30 xs:w-[500px] w-full">
        <Input
          data={ContactOrganisationData}
          setValue={setContactOrganisation}
          defaultValue=""
        />
        <div className="mt-2.5 smallIntroText">
          Use official name - if individual, use full name.
        </div>
        <div className="mt-30 flex flex-col gap-2.5">
          <div className="flex gap-2.5">
            <div className="w-1/2">
              <Input
                data={ContactAddressLine1Data}
                setValue={setContactAddressLine1}
                defaultValue=""
              />
            </div>
            <div className="w-1/2">
              <Input
                data={ContactAddressLine2Data}
                setValue={setContactAddressLine2}
                defaultValue=""
              />
            </div>
          </div>
          <div className="flex gap-2.5">
            <div className="w-1/2">
              <Input
                data={ContactTownData}
                setValue={setContactTown}
                defaultValue=""
              />
            </div>
            <div className="w-1/2">
              <Input
                data={ContactPostcodeData}
                setValue={setContactPostCode}
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className="mt-2.5 smallIntroText">
          City or town that your organisation is based.
        </div>
        <div className="mt-5">
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
        <div className="mt-2.5 smallIntroText">
          Country that your organisation is based.
        </div>
      </div>
    </div>
  );
};
