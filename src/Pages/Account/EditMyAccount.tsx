import React from "react";
import { useNavigate } from "react-router-dom";
import { UPDATEPASSWORD_URL } from "Lib/urls";

import {
  Button,
  DatePicker,
  DropdownInput,
  Input,
  PageTitle,
  PageSectionTitle,
  Select,
  Template,
  TextButton,
} from "UI";

import {
  AccountEmailData,
  AccountPasswordData,
  AddressData,
  CategoryData,
  ContactOrganisationData,
  ContactPhoneNumberData,
  ContactPostcodeData,
  DateData,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";

import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";
import Image from "Assets/images/account/profile-image.png";
import { RiDeleteBin6Line } from "react-icons/ri";

export const EditMyAccount: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Template>
      <form>
        <div className="relative md:pt-5 pt-[10px] md:pb-[150px] pb-[50px]">
          <div className="relative sm:pt-[45px] pt-[25px]">
            <div className="absolute w-full top-0">
              <img
                src={ExploreMask}
                alt="explore back mask"
                className="object-cover w-full max-ns:hidden"
              />
              <img
                src={MobileExploreMask}
                alt="explore back mask"
                className="object-cover w-full ns:hidden"
              />
            </div>
            <div className="lg:w-[1000px] w-full px-5 mx-auto">
              <PageTitle title="Edit my account" />
              <div className="mt-[60px]">
                <PageSectionTitle title="Profile picture" />
                <div className="mt-15 relative flex">
                  <div className="relative">
                    <img src={Image} alt="profileimage" />
                    <div className="absolute bottom-0 -right-2">
                      <button className="bg-gray-300 rounded-20 p-2">
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xs:w-[500px]">
                <div className="mt-30 flex flex-col gap-2.5">
                  <Input data={ContactOrganisationData} name="organisation" />
                  <div className="flex gap-[10px]">
                    <div className="w-1/2">
                      <Input data={ContactPostcodeData} name="post_code" />
                    </div>
                    <div className="w-1/2">
                      <Input data={AddressData} name="address" />
                    </div>
                  </div>
                  <Select
                    backgroundColor="bg-white"
                    name="organisation_country"
                    label="Country (Region)"
                    SelectFormData={RegionData}
                    textSize="generalText"
                  />
                  <Select
                    backgroundColor="bg-white"
                    name="category"
                    label="Category"
                    SelectFormData={CategoryData}
                    textSize="generalText"
                  />
                </div>
                <div className="mt-30">
                  <PageSectionTitle title="Contact details" />
                  <div className="mt-[15px]">
                    <div className="flex flex-col gap-[10px]">
                      <div className="flex flex-col gap-[10px]">
                        <Input data={FirstNameData} name="first_name" />
                        <Input data={LastNameData} name="last_name" />

                        <DatePicker data={DateData} name="birth" />
                      </div>
                      <DropdownInput
                        data={ContactPhoneNumberData}
                        name="phone_number"
                      />
                      <div className="flex flex-col gap-[10px]">
                        <div className="flex gap-[10px]">
                          <div className="w-1/2">
                            <Input
                              data={ContactPostcodeData}
                              name="post_code"
                            />
                          </div>
                          <div className="w-1/2">
                            <Input data={AddressData} name="address" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <Select
                          backgroundColor="bg-white"
                          name="contact_country"
                          label="Country (Region)"
                          SelectFormData={RegionData}
                          textSize="generalText"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-30">
                  <PageSectionTitle title="Account Details" />
                  <div className="mt-5 flex flex-col gap-2.5">
                    <Input data={AccountEmailData} name="email" />
                    <Input
                      data={AccountPasswordData}
                      disabled={true}
                      name="password"
                    />
                  </div>
                  <div className="mt-5">
                    <TextButton
                      text="Update password"
                      handleClick={() => navigate(UPDATEPASSWORD_URL)}
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
                      text="Save changes"
                      textColor="text-green-70"
                      textSize="buttonText"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Template>
  );
};
