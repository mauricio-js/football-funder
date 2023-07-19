import React, { useContext } from "react";
import { useNavigate } from "react-router";
import {
  Button,
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
import { CREATEFUNDRAISER_URL } from "Lib/urls";
import { MdAnnouncement } from "react-icons/md";
import { useMutation } from "react-query";
import { registerFormDataType } from "Pages/Auth/SingUp/types";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";
import { useSelector } from "react-redux";
import { useAxios } from "Lib";

export const FundraiserAccountUpate: React.FC = () => {
  const { showStatus } = useContext(StatusContext);
  const { formValues, selectValue } = useContext(FormStepperContext);
  const axios = useAxios();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state: any) => state.user);

  const data: any = {
    category_id: selectValue.sponsorship_category,
    org_name: formValues.org_name,
    org_address_line1: formValues.org_address_line1,
    org_address_line2: formValues.org_address_line2,
    org_phone_number: formValues.org_phone_number,
    org_city: formValues.org_city,
    org_post_code: formValues.org_post_code,
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

  const { mutate: fundraiserAccountUpdate, isLoading } = useMutation(
    (params: registerFormDataType) =>
      axios.put(`/user/${userInfo.id}/update_account`, params),
    {
      onSuccess: (data) => {
        showStatus("Your account has been succesfully updated!");
        navigate(CREATEFUNDRAISER_URL);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fundraiserAccountUpdate(data);
  };

  return (
    <Template isLoading={isLoading}>
      <form onSubmit={handleClick}>
        <div
          className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[120px] max-ns:mb-[60px] mx-auto"
        >
          <div className="mt-30">
            <PageTitle title="Create your fundraiser" />
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
    </Template>
  );
};
