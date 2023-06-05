import React, { useState } from "react";
import {
  Button,
  CheckBox,
  DropdownInput,
  Input,
  PageTitle,
  PageSectionTitle,
  Select,
  StepLabel,
  Template,
} from "UI";
import {
  AccountEmail,
  AccountConfirmPassword,
  AccountPassword,
  ContactAddressLine1,
  ContactAddressLine2,
  ContactOrganization,
  ContactPostcode,
  ContactTown,
  RegionData,
} from "Config";

export const CreateListingSignIn = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);
  const onHandleConfirm = () => {
    setConfirm(!confirm);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Template title="createListingSignIn">
      <div
        className="
        w-[1000px] max-lg:w-full px-[20px] mt-[60px] max-ns:mt-[20px]
        mb-[135px] max-ns:mb-[100px] mx-auto"
      >
        <div>
          <PageTitle title="Create your listing" />
          <div className="mt-[30px]">
            <StepLabel step="Step 2" title="Organisation information" />
          </div>

          <div className="flex flex-col gap-[15px]">
            <PageSectionTitle
              title="Contact"
              intro="Please provide the details of the organisation that you are listing advertising opportunities for."
            />
            <div className="mt-[30px]">
              <div className="w-full">
                <div className="md:w-1/2 flex flex-col gap-y-3">
                  <Input data={ContactOrganization} />
                  <DropdownInput />
                  <div className="flex gap-[10px]">
                    <div className="w-1/2">
                      <Input data={ContactAddressLine1} />
                    </div>
                    <div className="w-1/2">
                      <Input data={ContactAddressLine2} />
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="w-1/2">
                      <Input data={ContactTown} />
                    </div>
                    <div className="w-1/2">
                      <Input data={ContactPostcode} />
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
                      selectedOption={selectedOption}
                      textColor="text-green-70"
                      textSize="generalText"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <PageSectionTitle title="Account details" />
            <div className="mt-[15px] md:w-1/2 flex flex-col gap-[10px]">
              <Input data={AccountEmail} />
              <Input data={AccountPassword} />
              <Input data={AccountConfirmPassword} />
            </div>
          </div>
          <div>
            <PageSectionTitle title="Confirmation" />
            <div className="mt-[15px]">
              <CheckBox
                align="flex-row-reverse gap-[10px]"
                checked={confirm}
                label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
                onSelect={onHandleConfirm}
                value="checked"
                textClass="generalSmallText text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mt-[60px] max-ns:mt-[30px] flex justify-end">
          <div className="w-[250px] max-ns:w-full">
            <Button
              backgroundColor="bg-green-10"
              textColor="text-black"
              textSize="text-[16px] leading-[20px] font-semibold"
              height="h-[50px]"
              width="w-full"
              text="Continue"
            />
          </div>
        </div>
      </div>
    </Template>
  );
};
