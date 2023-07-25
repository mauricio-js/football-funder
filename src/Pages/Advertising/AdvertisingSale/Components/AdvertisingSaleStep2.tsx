import React, { useState, useContext } from "react";
import {
  Button,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  StepperBackButton,
  StepLabel,
  Textarea,
  VerticalCardLabel,
  ConfirmBox,
} from "UI";
import {
  AccountEmailData,
  ContactPhoneNumberData,
  DonateClubLabel,
  DonateLocationLabel,
  FirstNameData,
  ContactOrganisationData,
} from "Config";
import { LivePagePropsType } from "types";
import { FormStepperContext } from "App/FormStepperProvider";

export const AdvertisingSaleStep2: React.FC<LivePagePropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const [confirm, setConfirm] = useState<{ [key: string]: any }>({
    consent: false,
  });
  const handleConfirm = (key: string, value: any) => {
    setConfirm({
      [key]: !value,
    });
  };
  const { adsSaleValue, handleAdsSaleValue } = useContext(FormStepperContext);
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[150px] max-ns:mb-[100px] mx-auto"
    >
      <div className="mt-30">
        <PageTitle title="Pitchside advertising board 1220x610cm" />
      </div>
      <div className="mt-6">
        <StepperBackButton handleBackPage={handlePrevPage} />
      </div>
      <div className="mt-9">
        <PageSectionTitle title="Advertising enquiry" />
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
                name="full_name"
                value={adsSaleValue.full_name}
                setValue={handleAdsSaleValue}
                required={true}
                disabled={false}
              />
              <Input
                data={ContactOrganisationData}
                name="org_name"
                value={adsSaleValue.org_name}
                setValue={handleAdsSaleValue}
                required={true}
                disabled={false}
              />
              <Input
                data={AccountEmailData}
                name="email"
                value={adsSaleValue.email}
                setValue={handleAdsSaleValue}
                required={true}
                disabled={false}
              />
              <DropdownInput
                data={ContactPhoneNumberData}
                name="phone_number"
                phoneCountry="pn_country"
                value={adsSaleValue.phone_number}
                country={ContactPhoneNumberData[0].country}
                setValue={handleAdsSaleValue}
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle title="Enquiry" />
          <div className="mt-15">
            <Textarea
              name="comment"
              value={adsSaleValue.comment}
              setValue={handleAdsSaleValue}
              title="Your comment"
              titleStyle="text-[12px] leading-[14px] font-medium text-gray-10"
              height="h-[150px]"
              limit={300}
              showLeftCharacters={true}
              required={true}
            />
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle title="Confirmation" />
          <div className="mt-[15px]">
            <ConfirmBox
              name="consent"
              label="I consent to the details of this account being passed to the rights holder to initiate contact should they wish to engage further on the opportunity."
              checkboxStyle={true}
              value={confirm.consent}
              setValue={handleConfirm}
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
