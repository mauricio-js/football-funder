import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, BuyerCard, DropdownInput, Input, Select, Template } from "UI";

import {
  AccountEmailData,
  AddressData,
  ContactPhoneNumberData,
  FirstNameData,
  LastNameData,
  NameData,
  PostcodeData,
  RegionData,
} from "Config";

import { BUYERCHECKOUT_URL } from "Lib";

import BuyCardImage from "Assets/images/agreement/BuyCardImage.png";
import { BsCheckLg } from "react-icons/bs";

export const SellerPage: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("Football Funder");

  const [postcode1, setPostcode1] = useState<string>("");

  const [address1, setAddress1] = useState<string>("");

  const [postcode2, setPostcode2] = useState<string>("");

  const [address2, setAddress2] = useState<string>("");

  const [selectedCountry1Option, setSelectedCountry1Option] =
    useState<string>("");

  const [selectedCountry2Option, setSelectedCountry2Option] =
    useState<string>("");

  const [firstName, setFirstName] = useState<string>("");

  const [lastName, setLastName] = useState<string>("");

  const [country, setCountry] = useState<string>(
    ContactPhoneNumberData[0].country
  );

  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState<string>(
    ContactPhoneNumberData[0].randomNumber
  );

  const [email, setEmail] = useState<string>("");

  const [showSignMark, setShowSignMark] = useState<boolean>(false);

  const handleSelectCountry1Change = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCountry1Option(event.target.value);
  };

  const handleSelectCountry2Change = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCountry2Option(event.target.value);
  };

  return (
    <Template>
      <div className="xs:pt-30 pt-5 xs:pb-[150px] pb-[100px] px-5">
        <div className="lg:w-[1000px] mx-auto w-full">
          <div>
            <div className="stepLabelTitle">Congratulations!</div>
            <div className="mt-5 introText">
              The seller has confirmed they want to work in partnership with
              you, and the asset is yours pending contract signing and payment
              below.
              <br />
              <br /> As the buyer, please fill out your details and then select
              ‘Sign contract’ where you will be able to review and sign.
              <br />
              <br /> Once signed, select ‘Proceed to payment’ to finalise the
              deal.
            </div>
          </div>
          <div className="xs:w-[500px]">
            <div>
              <div className="mt-30 stepLabelTitle">Buyer</div>
              <div className="mt-30">
                <BuyerCard image={BuyCardImage} cost={3000} />
              </div>
              <div className="mt-30">
                <div>
                  <div className="buttonText text-green-70">Organisation</div>
                  <div className="mt-5">
                    <Input
                      data={NameData}
                      setValue={setName}
                      disabled={true}
                      defaultValue={name}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <div>
                  <div className="buttonText text-green-70">Address line 1</div>
                  <div className="mt-5">
                    <div className="flex gap-2.5">
                      <div className="w-1/2">
                        <Input
                          data={PostcodeData}
                          setValue={setPostcode1}
                          defaultValue={postcode1}
                        />
                      </div>
                      <div className="w-1/2">
                        <Input
                          data={AddressData}
                          setValue={setAddress1}
                          defaultValue={address1}
                        />
                      </div>
                    </div>
                    <div className="mt-2.5">
                      <Select
                        backgroundColor="bg-white"
                        border="border-[1px] border-gray-300"
                        onOptionChange={handleSelectCountry1Change}
                        placeholder="text-gray-500"
                        placeholderText="Country (Region)"
                        SelectFormData={RegionData}
                        selectedOption={selectedCountry1Option}
                        textColor="text-green-70"
                        textSize="generalText"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <div>
                  <div className="buttonText text-green-70">Address line 2</div>
                  <div className="mt-5">
                    <div className="flex gap-2.5">
                      <div className="w-1/2">
                        <Input
                          data={PostcodeData}
                          setValue={setPostcode2}
                          defaultValue={postcode2}
                        />
                      </div>
                      <div className="w-1/2">
                        <Input
                          data={AddressData}
                          setValue={setAddress2}
                          defaultValue={address2}
                        />
                      </div>
                    </div>
                    <div className="mt-2.5">
                      <Select
                        backgroundColor="bg-white"
                        border="border-[1px] border-gray-300"
                        onOptionChange={handleSelectCountry2Change}
                        placeholder="text-gray-500"
                        placeholderText="Country (Region)"
                        SelectFormData={RegionData}
                        selectedOption={selectedCountry2Option}
                        textColor="text-green-70"
                        textSize="generalText"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <div>
                  <div className="buttonText text-green-70">
                    Legal contact information
                  </div>
                  <div className="mt-5 flex flex-col gap-2.5">
                    <Input
                      data={FirstNameData}
                      defaultValue={firstName}
                      setValue={setFirstName}
                    />
                    <Input
                      data={LastNameData}
                      defaultValue={lastName}
                      setValue={setLastName}
                    />
                    <DropdownInput
                      country={country}
                      data={ContactPhoneNumberData}
                      phoneNumber={phoneNumber}
                      selectCountry={setCountry}
                      inputPhoneNumber={setPhoneNumber}
                      placeholder={phoneNumberPlaceholder}
                      setPlaceholder={setPhoneNumberPlaceholder}
                    />
                    <Input
                      data={AccountEmailData}
                      defaultValue={email}
                      setValue={setEmail}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <div className="stepLabelTitle">Seller</div>
                <div className="mt-5 p-15 rounded-20 bg-gray-20">
                  <div className="introText">Organisation name</div>
                  <div className="buttonText text-green-70">
                    Coxhoe Athletic FC
                  </div>
                  <div className="mt-15 introText">Address</div>
                  <div className="flex flex-col buttonText text-green-70">
                    <div>Beechfield Park</div>
                    <div>Commercial Road East</div>
                    <div>Durham</div>
                    <div>DH6 4LF</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end xs:mt-[60px] mt-30">
            {!showSignMark && (
              <div className="xs:w-[250px] w-full">
                <Button
                  backgroundColor="bg-green-10"
                  height="h-[50px]"
                  text="Sign contract"
                  textColor="text-green-70"
                  textSize="buttonText"
                  width="w-full"
                  handleClick={() => setShowSignMark(true)}
                />
              </div>
            )}
            {showSignMark && (
              <div className="flex xs:flex-row flex-col gap-2.5 w-full justify-end">
                <div className="xs:w-[250px] w-full">
                  <Button
                    backgroundColor="bg-green-10 bg-opacity-50"
                    height="h-[50px]"
                    text="Signed"
                    textColor="text-green-70"
                    textSize="buttonText"
                    width="w-full"
                    icon={BsCheckLg}
                  />
                </div>
                <div className="xs:w-[250px] w-full">
                  <Button
                    backgroundColor="bg-green-10"
                    height="h-[50px]"
                    text="Proceed to payment"
                    textColor="text-green-70"
                    textSize="buttonText"
                    width="w-full"
                    handleClick={() => navigate(BUYERCHECKOUT_URL)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Template>
  );
};
