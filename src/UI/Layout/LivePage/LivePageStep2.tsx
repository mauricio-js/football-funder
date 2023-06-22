import React, { useState } from "react";
import {
  Button,
  DropdownInput,
  Input,
  GeneralCheckBoxList,
  PageSectionTitle,
  PageTitle,
  StepperBackButton,
  StepLabel,
  Textarea,
  VerticalCardLabel,
} from "UI";
import {
  AccountEmailData,
  ContactPhoneNumber,
  DonateClubLabel,
  DonateLocationLabel,
  FirstNameData,
  ContactOrganisationData,
  SaleEnquiryConfirm,
} from "Config";
import { LivePagePropsType } from "types";

export const LivePageStep2: React.FC<LivePagePropsType> = ({
  handleNextPage,
  handlePrevPage,
  introTitle,
  pageTitle,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactOrganistion, setContactOrganisation] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstName, setFirstName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lastName, setLastName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountEmail, setAccountEmail] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountConfirmPassword, setAccountConfirmPassword] =
    useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [country, setCountry] = useState<string>(ContactPhoneNumber[0].country);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState<string>(
    ContactPhoneNumber[0].randomNumber
  );
  const [isConfirm, setIsConfirm] = useState<string[]>([""]);
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[150px] max-ns:mb-[100px] mx-auto"
    >
      <div className="mt-30">
        <PageTitle title={pageTitle} />
      </div>
      <div className="mt-6">
        <StepperBackButton handleBackPage={handlePrevPage} />
      </div>
      <div className="mt-9">
        <PageSectionTitle title={introTitle} />
        <div className="mt-2.5">
          <div className="flex flex-row max-vs:flex-col gap-2.5">
            <VerticalCardLabel cardLabelData={DonateClubLabel} />
            <VerticalCardLabel cardLabelData={DonateLocationLabel} />
          </div>
        </div>
      </div>
      <div className="mt-30">
        <StepLabel number="Step 2" title="Your enquiry" />
      </div>
      <div className="xs:w-[500px]">
        <div className="mt-30">
          <PageSectionTitle title="Your details" />
          <div className="mt-5 ">
            <div className="flex flex-col gap-[10px]">
              <Input
                data={FirstNameData}
                setValue={setFirstName}
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
              <DropdownInput
                country={country}
                phoneNumber={phoneNumber}
                selectCountry={setCountry}
                inputPhoneNumber={setPhoneNumber}
                placeholder={phoneNumberPlaceholder}
                setPlaceholder={setPhoneNumberPlaceholder}
              />
            </div>
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle title="Enquiry" />
          <div className="mt-15">
            <Textarea
              title="Your comment"
              titleStyle="text-[12px] leading-[14px] font-medium text-gray-10"
              height="h-[150px]"
              limit={300}
              showLeftCharacters={true}
            />
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle title="Confirmation" />
          <div className="mt-[15px]">
            <GeneralCheckBoxList
              options={SaleEnquiryConfirm}
              selectedValues={isConfirm}
              setValues={setIsConfirm}
            />
          </div>
        </div>
      </div>
      <div className="xs:mt-[60px] mt-30">
        <div className="flex xs:justify-end max-xs:flex-col">
          <div className="xs:w-[250px]">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Enquire"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
