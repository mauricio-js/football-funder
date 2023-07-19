import React, { useContext } from "react";
import {
  Button,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepperBackButton,
  StepLabel,
} from "UI";
import {
  AccountEmailData,
  AccountPasswordData,
  AccountConfirmPasswordData,
  ContactAddressLine1Data,
  ContactAddressLine2Data,
  ContactOrganisationData,
  ContactPhoneNumberData,
  ContactPostcodeData,
  ContactTownData,
  ProfileURLData,
  RegionData,
} from "Config";
import { FormStepperContext } from "App/FormStepperProvider";
import { StatusContext } from "App/StatusProvider";

interface FundraiserSignUpSecondStepPropsType {
  handleSubmit: () => void;
  handlePrevPage: () => void;
}
export const AdvertisingSignUpSecondStep: React.FC<
  FundraiserSignUpSecondStepPropsType
> = ({ handleSubmit, handlePrevPage }) => {
  const { formValues } = useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValues.password !== formValues.confirm_password) {
      showStatus("These passwords do not match. Try again.", "error");
    } else if (formValues.password && formValues.password.length < 8) {
      showStatus("Password must be longer than 8 characters", "error");
    } else {
      handleSubmit();
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
          <PageTitle title="Create your listing" />
        </div>
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 2" title="Organisation information" />
        </div>

        <div className="mt-30">
          <PageSectionTitle
            title="Contact"
            intro="Please provide the details of the organisation that you are listing advertising opportunities for."
          />
          <div className="mt-[15px] xs:w-[500px]">
            <div className="flex flex-col gap-[10px]">
              <Input
                data={ContactOrganisationData}
                name="org_name"
                required={true}
                disabled={false}
              />

              <DropdownInput
                data={ContactPhoneNumberData}
                name="org_phone_number"
                required={true}
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactAddressLine1Data}
                      name="org_address_line1"
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={ContactAddressLine2Data}
                      name="org_address_line2"
                      required={true}
                      disabled={false}
                    />
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactTownData}
                      name="org_city"
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={ContactPostcodeData}
                      name="org_post_code"
                      required={true}
                      disabled={false}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Select
                  backgroundColor="bg-white"
                  name="org_country"
                  label="Country (Region)"
                  SelectFormData={RegionData}
                  textSize="generalText"
                />
              </div>
            </div>
          </div>
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
              required={true}
              disabled={false}
            />
            <Input
              data={AccountConfirmPasswordData}
              name="confirm_password"
              required={true}
              disabled={false}
            />
          </div>
        </div>
        <div className="mt-30 md:w-[630px]">
          <PageSectionTitle
            title="Profile URL"
            intro="Each club and organisation signed up to Football Funder is given their own profile page to share their fundraisers and advertising or sponsorship listings from one place. "
          />
          <div className="mt-7 introText">
            Enter your preferred subdomain name below:
          </div>
          <div className="mt-[35px] xs:w-[500px]">
            <Input
              data={ProfileURLData}
              name="profile_url"
              required={true}
              disabled={false}
            />
          </div>
        </div>

        <div className="xs:mt-[100px] mt-[60px]">
          <div className="flex xs:justify-end">
            <div className="xs:w-[250px] w-full">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Continue"
                textColor="text-green-70"
                textSize="buttonText"
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
