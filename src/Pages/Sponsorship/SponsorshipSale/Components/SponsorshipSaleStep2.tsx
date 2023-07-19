import React from "react";
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
  ContactPhoneNumberData,
  DonateClubLabel,
  DonateLocationLabel,
  FirstNameData,
  ContactOrganisationData,
  SaleEnquiryConfirm,
} from "Config";
import { LivePagePropsType } from "types";

export const SponsorshipSaleStep2: React.FC<LivePagePropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[150px] max-ns:mb-[100px] mx-auto"
    >
      <div className="mt-30">
        <PageTitle title="Sponsorship enquiry" />
      </div>
      <div className="mt-6">
        <StepperBackButton handleBackPage={handlePrevPage} />
      </div>
      <div className="mt-9">
        <PageSectionTitle title="Front of shirt sponsorship - Season 2023/24" />
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
                name="first_name"
                required={true}
                disabled={false}
              />
              <Input
                data={ContactOrganisationData}
                name="organisation"
                required={true}
                disabled={false}
              />
              <Input
                data={AccountEmailData}
                name="email"
                required={true}
                disabled={false}
              />
              <DropdownInput
                data={ContactPhoneNumberData}
                name="phone_number"
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
            <GeneralCheckBoxList
              options={SaleEnquiryConfirm}
              name="sale_enquiry_confirm"
              textStyle="introText"
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
