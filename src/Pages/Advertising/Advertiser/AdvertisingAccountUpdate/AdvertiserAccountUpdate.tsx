import React, { useContext } from "react";
import {
  Button,
  CheckBox,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepLabel,
  DatePicker,
  Template,
} from "UI";
import {
  AccountEmailData,
  AccountPasswordData,
  AccountConfirmPasswordData,
  ContactAddressLine1Data,
  ContactAddressLine2Data,
  ContactPhoneNumberData,
  ContactPostcodeData,
  ContactTownData,
  DateData,
  FirstNameData,
  LastNameData,
  ProfileURLData,
  RegionData,
} from "Config";
import { MdAnnouncement } from "react-icons/md";
import { StatusContext } from "App/StatusProvider";
import { useAxios } from "Lib";
import { CREATEADVERTISING_URL } from "Lib/urls";
import { useNavigate } from "react-router-dom";
import { FormStepperContext } from "App/FormStepperProvider";
import { useSelector } from "react-redux";
import { useMutation } from "react-query";
import { registerFormDataType } from "Pages/Auth/SingUp/types";

export const AdvertisingAccountUpdate: React.FC = () => {
  const { userInfo } = useSelector((state: any) => state.user);
  const { formValues, selectValue, selectedCheckbox } =
    useContext(FormStepperContext);
  const axios = useAxios();
  const navigate = useNavigate();

  const { showStatus } = useContext(StatusContext);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      if (!selectedCheckbox.confirm || selectedCheckbox.confirm.length === 0) {
        showStatus(
          "You must confirm Football Funder’s Terms & Conditions and Fraud Policy",
          "error"
        );
      } else {
        advertiserAccountUpdate(data);
    }
  };

  const data: any = {
    category_id: selectValue.advertiser_category,
    org_name: formValues.org_name,
    org_address_line1: formValues.org_address_line1,
    org_address_line2: formValues.org_address_line2,
    org_phone_number: formValues.org_phone_number,
    org_city: formValues.org_city,
    org_post_code: formValues.org_postcode,
    org_country: formValues.org_country,
    address_line1: formValues.address_line1,
    address_line2: formValues.address_line2,
    city: formValues.city,
    post_code: formValues.post_code,
    country: formValues.country,
    phone_number: formValues.phone_number,
    first_name: formValues.first_name,
    last_name: formValues.last_name,
  };

  const { mutate: advertiserAccountUpdate, isLoading } = useMutation(
    (params: registerFormDataType) =>
      axios.put(`/user/${userInfo.id}/update_account`, params),
    {
      onSuccess: (data) => {
        showStatus("Your account has been succesfully updated!");
        navigate(CREATEADVERTISING_URL);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  return (
    <Template isLoading={isLoading}>
      <form onSubmit={handleClick}>
        <div
          className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[120px] max-ns:mb-[60px] mx-auto"
        >
          <div className="mt-30">
            <PageTitle title="Create your listing" />
          </div>

          <div className="mt-30">
            <StepLabel number="Step 2" title="Your basic information" />
          </div>

          <div className="mt-30">
            <PageSectionTitle
              title="Contact"
              intro="Please provide the details of the commercial contact for the advertising."
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
                  <DatePicker data={DateData} name="birth_date" />
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
                    name="country"
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
          <div className="mt-30">
            <PageSectionTitle title="Confirmation" />
            <div className="mt-[15px]">
              <CheckBox
                name="confirm"
                align="flex-row-reverse gap-[10px]"
                label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
                value={0}
                textClass="generalSmallText text-gray-500"
              />
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
    </Template>
  );
};
