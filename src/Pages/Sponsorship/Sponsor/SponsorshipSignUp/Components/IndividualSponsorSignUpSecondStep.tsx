import React, { useContext } from "react";
import {
  Button,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepLabel,
  DatePicker,
  StepperBackButton,
  CheckBox,
} from "UI";
import {
  AccountConfirmPasswordData,
  AccountEmailData,
  AccountPasswordData,
  ContactAddressLine1Data,
  ContactAddressLine2Data,
  ContactPhoneNumberData,
  ContactPostcodeData,
  ContactTownData,
  DateData,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";
import { MdAnnouncement } from "react-icons/md";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";

interface FundraiserSignUpSecondStepPropsType {
  handleSubmit: () => void;
  handlePrevPage: () => void;
}
export const IndivididualSponsorSignUpSecondStep: React.FC<
  FundraiserSignUpSecondStepPropsType
> = ({ handlePrevPage, handleSubmit }) => {
  const { selectedCheckbox, formValues } = useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      showStatus("These passwords do not match. Try again.", "error");
    } else if (formValues.password && formValues.password.length < 8) {
      showStatus("Password must be longer than 8 characters", "error");
    } else {
      if (!selectedCheckbox.confirm || selectedCheckbox.confirm.length === 0) {
        showStatus(
          "You must confirm Football Funder’s Terms & Conditions and Fraud Policy",
          "error"
        );
      } else {
        handleSubmit();
      }
    }
  };

  return (
    <form onSubmit={handleClick}>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[120px] max-ns:mb-[60px] mx-auto"
      >
        <div className="mt-30">
          <PageTitle title="Create your fundraiser" />
        </div>
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 1" title="Your basic information" />
        </div>

        <div className="mt-30">
          <PageSectionTitle
            title="Contact"
            intro="Please provide the details of the legal contact for the fundraiser."
          />
          <div className="mt-[15px] xs:w-[500px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <Input
                  data={FirstNameData}
                  name="first_name"
                  required={true}
                  disabled={false}
                />
                <Input
                  data={LastNameData}
                  name="last_name"
                  required={true}
                  disabled={false}
                />
                <DatePicker data={DateData} name="birth_day" />
              </div>
              <DropdownInput
                data={ContactPhoneNumberData}
                name="phone_number"
                required={true}
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactAddressLine1Data}
                      name="address_line1"
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={ContactAddressLine2Data}
                      name="address_line2"
                      required={true}
                      disabled={false}
                    />
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactTownData}
                      name="city"
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={ContactPostcodeData}
                      name="post_code"
                      required={true}
                      disabled={false}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Select
                  backgroundColor="bg-white"
                  label="Country (Region)"
                  SelectFormData={RegionData}
                  textSize="generalText"
                  name="country"
                />
              </div>
              <div className="mt-30 xs:w-[500px]">
                <PageSectionTitle title="Account details" />
                <div className="mt-5 flex flex-col gap-[10px]">
                  <Input
                    data={AccountEmailData}
                    name="email"
                    required={true}
                    disabled={false}
                  />
                  <Input
                    data={AccountPasswordData}
                    name="password"
                    required={false}
                    disabled={false}
                  />
                  <Input
                    data={AccountConfirmPasswordData}
                    name="confirm_password"
                    required={false}
                    disabled={false}
                  />
                </div>
              </div>

              <div className="mt-30">
                <PageSectionTitle title="Confirmation" />
                <div className="mt-[15px]">
                  <CheckBox
                    align="flex-row-reverse gap-[10px]"
                    name="confirm"
                    label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
                    value={1}
                    textClass="generalSmallText text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[500px] mt-30">
          <div
            className="px-15 xs:py-[15px] py-2 w-full bg-gray-200 rounded-10 
              flex items-center gap-[10px] generalSmallText text-green-80"
          >
            <div className="w-[14px] h-[14px]">
              <MdAnnouncement />
            </div>
            You can modify your fundraiser details at any time after posting.
          </div>
        </div>
        <div className="xs:mt-[100px] mt-[60px]">
          <div className="flex xs:justify-end">
            <div className="xs:w-[250px] w-full">
              <Button
                type="submit"
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Continue"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
