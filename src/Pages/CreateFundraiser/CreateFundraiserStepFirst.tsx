import React, { useState } from "react";
import {
  Input,
  DropdownInput,
  PageSectionTitle,
  PageTitle,
  Select,
  StepLabel,
} from "UI";
import {
  ContactAddressLine1,
  ContactAddressLine2,
  ContactPostcode,
  ContactTown,
  Date,
  FirstName,
  LastName,
  RegionData,
} from "Config";
import { MdAnnouncement } from "react-icons/md";

export const CreateFundraiserStepFirst = () => {
  const [selectedCountryOption, setSelectedCountryOption] =
    useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryOption(event.target.value);
  };
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [contactAddressLine1, setContactAddressLine1] = useState<string>("");
  const [contactAddressLine2, setContactAddressLine2] = useState<string>("");
  const [contactTown, setContactTown] = useState<string>("");
  const [contactPostcode, setContactPostCode] = useState<string>("");
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-[20px] mt-[60px] max-ns:mt-[20px]
        mb-[120px] max-ns:mb-[30px] mx-auto"
    >
      <PageTitle title="Create your fundraiser" />
      <div className="mt-[30px]">
        <StepLabel step="Step 1" title="Your basic information" />
      </div>
      <div className="mt-[30px]">
        <PageSectionTitle
          title="Contact"
          intro="Please provide the details of the legal contact for the fundraiser."
        />
        <div className="mt-[15px] md:w-1/2">
          <div className="flex flex-col gap-[10px]">
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
            <Input data={Date} setValue={setDate} defaultValue={date} />
            <DropdownInput />
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <div className="w-1/2">
                  <Input
                    data={ContactAddressLine1}
                    setValue={setContactAddressLine1}
                    defaultValue={contactAddressLine1}
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    data={ContactAddressLine2}
                    setValue={setContactAddressLine2}
                    defaultValue={contactAddressLine2}
                  />
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-1/2">
                  <Input
                    data={ContactTown}
                    setValue={setContactTown}
                    defaultValue={contactTown}
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    data={ContactPostcode}
                    setValue={setContactPostCode}
                    defaultValue={contactPostcode}
                  />
                </div>
              </div>
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
          <div className="mt-[30px]">
            <div
              className="px-[15px] md:py-[15px] py-2 w-full bg-gray-200 rounded-10 
              flex items-center gap-[10px] generalSmallText text-green-80"
            >
              <div className="w-[14px] h-[14px]">
                <MdAnnouncement />
              </div>
              You can modify your fundraiser details at any time after posting.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
