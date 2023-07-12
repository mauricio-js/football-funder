import React from "react";
import { useNavigate } from "react-router-dom";

import { CROWDFUNDDETAILLIVEMENU_URL } from "Lib";

import {
  Button,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepLabel,
  StepperBackButton,
  Template,
} from "UI";

import {
  AccountNumberData,
  SortCodeData,
  AddressData,
  ContactPhoneNumberData,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";

export const MakeWithdrawal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Template>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[150px] max-ns:mb-[100px] mx-auto"
      >
        <div className="mt-30">
          <PageTitle title="Make a withdrawal" />
        </div>
        <div className="mt-6">
          <StepperBackButton
            handleBackPage={() => navigate(CROWDFUNDDETAILLIVEMENU_URL)}
          />
        </div>

        <div className="mt-5">
          <StepLabel number="Step 1" title="Account holder information" />
        </div>
        <div className="xs:w-[500px]">
          <div className="mt-30">
            <PageSectionTitle title="Withdrawal amount" />
            <div className="mt-15 flex justify-between rounded-10 bg-gray-20 p-15">
              <div className="introText">Amount</div>
              <div className="mt-[5px] buttonText text-green-70">￡45.00</div>
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle title="Details" />
            <div className="mt-[15px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <Input data={FirstNameData} name="first_name" />
                  <Input data={LastNameData} name="last_name" />
                  <DropdownInput
                    data={ContactPhoneNumberData}
                    name="phone_number"
                  />

                  <Input data={AddressData} name="address" />
                </div>
                <div>
                  <Select
                    backgroundColor="bg-white"
                    name="country"
                    label="Country (Region)"
                    SelectFormData={RegionData}
                    textSize="generalText"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle title="Account" />
            <div className="mt-5 flex flex-col gap-[10px]">
              <Input data={AccountNumberData} name="account_number" />
              <Input data={SortCodeData} name="sort_code" />
            </div>
          </div>
        </div>
        <div className="xs:mt-[60px] mt-30">
          <div className="flex xs:justify-end">
            <div className="xs:w-[250px] w-full">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Make withdrawal"
                textColor="text-green-70"
                textSize="buttonText"
                // handleClick={handleNextPage}
              />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
