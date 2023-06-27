import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UPDATEPASSWORD_URL } from "Lib";

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
import ProfileImage from "Assets/images/account/profile-image.png";
import { RiDeleteBin6Line } from "react-icons/ri";

export const EditMyAccount: React.FC = () => {
  const navigate = useNavigate();
  const [selectedContactCountryOption, setSelectedContactCountryOption] =
    useState<string>("");
  const [
    selectedOrganisationCountryOption,
    setSelectedOrganisationCountryOption,
  ] = useState<string>("");

  const [selectedCategoryOption, setSelectedCategoryOption] =
    useState<string>("");

  const handleSelectedContactCountryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedContactCountryOption(event.target.value);
  };

  const handleSelectedOrganisationCountryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOrganisationCountryOption(event.target.value);
  };

  const handleSelectCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategoryOption(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactOrganistion, setContactOrganisation] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstName, setFirstName] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lastName, setLastName] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = useState<Date | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [addresss, setAddress] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactPostcode, setContactPostCode] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountEmail, setAccountEmail] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountPassword, setAccountPassword] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [country, setCountry] = useState<string>(
    ContactPhoneNumberData[0].country
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState<string>(
    ContactPhoneNumberData[0].randomNumber
  );
  return (
    <Template>
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
                  <img src={ProfileImage} alt="profileimage" />
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
                <Input
                  data={ContactOrganisationData}
                  setValue={setContactOrganisation}
                  defaultValue=""
                />
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactPostcodeData}
                      setValue={setContactPostCode}
                      defaultValue={contactPostcode}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={AddressData}
                      setValue={setAddress}
                      defaultValue=""
                    />
                  </div>
                </div>
                <Select
                  backgroundColor="bg-white"
                  border="border-[1px] border-gray-300"
                  onOptionChange={handleSelectedOrganisationCountryChange}
                  placeholder="text-gray-500"
                  placeholderText="Country (Region)"
                  SelectFormData={RegionData}
                  selectedOption={selectedOrganisationCountryOption}
                  textColor="text-green-70"
                  textSize="generalText"
                />
                <Select
                  backgroundColor="bg-white"
                  border="border-[1px] border-gray-300"
                  onOptionChange={handleSelectCategoryChange}
                  placeholder="text-gray-500"
                  placeholderText="Category"
                  SelectFormData={CategoryData}
                  selectedOption={selectedCategoryOption}
                  textColor="text-green-70"
                  textSize="generalText"
                />
              </div>
              <div className="mt-30">
                <PageSectionTitle title="Contact details" />
                <div className="mt-[15px]">
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-[10px]">
                      <Input
                        data={FirstNameData}
                        setValue={setFirstName}
                        defaultValue=""
                      />
                      <Input
                        data={LastNameData}
                        setValue={setLastName}
                        defaultValue=""
                      />

                      <DatePicker
                        data={DateData}
                        setValue={setDate}
                        defaultValue={null}
                      />
                    </div>
                    <DropdownInput
                      country={country}
                      data={ContactPhoneNumberData}
                      phoneNumber={phoneNumber}
                      selectCountry={setCountry}
                      inputPhoneNumber={setPhoneNumber}
                      placeholder={phoneNumberPlaceholder}
                      setPlaceholder={setPhoneNumberPlaceholder}
                    />
                    <div className="flex flex-col gap-[10px]">
                      <div className="flex gap-[10px]">
                        <div className="w-1/2">
                          <Input
                            data={ContactPostcodeData}
                            setValue={setContactPostCode}
                            defaultValue=""
                          />
                        </div>
                        <div className="w-1/2">
                          <Input
                            data={AddressData}
                            setValue={setAddress}
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Select
                        backgroundColor="bg-white"
                        border="border-[1px] border-gray-300"
                        onOptionChange={handleSelectedContactCountryChange}
                        placeholder="text-gray-500"
                        placeholderText="Country (Region)"
                        SelectFormData={RegionData}
                        selectedOption={selectedContactCountryOption}
                        textColor="text-green-70"
                        textSize="generalText"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <PageSectionTitle title="Account Details" />
                <div className="mt-5 flex flex-col gap-2.5">
                  <Input
                    data={AccountEmailData}
                    setValue={setAccountEmail}
                    defaultValue=""
                  />
                  <Input
                    data={AccountPasswordData}
                    setValue={setAccountPassword}
                    defaultValue=""
                    disabled={true}
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
    </Template>
  );
};
