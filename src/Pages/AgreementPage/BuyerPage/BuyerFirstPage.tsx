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

export const BuyerFirstPage: React.FC = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const [selectedCountry1Option, setSelectedCountry1Option] =
    useState<string>("");

  const [selectedCountry2Option, setSelectedCountry2Option] =
    useState<string>("");

  const [country, setCountry] = useState<string>(
    ContactPhoneNumberData[0].country
  );

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
      <form>
        <div className="xs:pt-30 pt-5 xs:pb-[150px] pb-[100px] px-5">
          <div className="lg:w-[1000px] mx-auto w-full">
            <div>
              <div className="stepLabelTitle">Congratulations!</div>
              <div className="mt-5 introText">
                The seller has confirmed they want to work in partnership with
                you, and the asset is yours pending contract signing and payment
                below.
                <br />
                <br /> As the buyer, please fill out your details and then
                select ‘Sign contract’ where you will be able to review and
                sign.
                <br />
                <br /> Once signed, select ‘Proceed to payment’ to finalise the
                deal.
              </div>
            </div>
            <div className="xs:w-[500px]">
              <div>
                <div className="mt-30 stepLabelTitle">Buyer</div>
                <div className="mt-30">
                  <BuyerCard image={BuyCardImage} cost="£3000" />
                </div>
                <div className="mt-30">
                  <div>
                    <div className="buttonText text-green-70">Organisation</div>
                    <div className="mt-5">
                      <Input
                        data={NameData}
                        disabled={true}
                        name="name"
                        value={formValues.name || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-30">
                  <div>
                    <div className="buttonText text-green-70">
                      Address line 1
                    </div>
                    <div className="mt-5">
                      <div className="flex gap-2.5">
                        <div className="w-1/2">
                          <Input
                            data={PostcodeData}
                            name="post_code"
                            onChange={handleInputChange}
                            value={formValues.post_code || ""}
                          />
                        </div>
                        <div className="w-1/2">
                          <Input
                            data={AddressData}
                            name="address"
                            onChange={handleInputChange}
                            value={formValues.address || ""}
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
                    <div className="buttonText text-green-70">
                      Address line 2
                    </div>
                    <div className="mt-5">
                      <div className="flex gap-2.5">
                        <div className="w-1/2">
                          <Input
                            data={PostcodeData}
                            name="post_code"
                            onChange={handleInputChange}
                            value={formValues.post_code || ""}
                          />
                        </div>
                        <div className="w-1/2">
                          <Input
                            data={AddressData}
                            name="address"
                            onChange={handleInputChange}
                            value={formValues.address || ""}
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
                        name="first_name"
                        onChange={handleInputChange}
                        value={formValues.first_name || ""}
                      />
                      <Input
                        data={LastNameData}
                        name="last_name"
                        onChange={handleInputChange}
                        value={formValues.last_name || ""}
                      />
                      <DropdownInput
                        country={country}
                        data={ContactPhoneNumberData}
                        selectCountry={setCountry}
                        name="phone_number"
                        onChange={handleInputChange}
                        value={formValues.phone_number || ""}
                      />
                      <Input
                        data={AccountEmailData}
                        name="email"
                        onChange={handleInputChange}
                        value={formValues.email || ""}
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
      </form>
    </Template>
  );
};
