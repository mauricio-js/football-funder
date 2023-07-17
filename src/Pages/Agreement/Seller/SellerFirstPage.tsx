import React from "react";
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

import { SELLERFINAL_URL } from "Lib/urls";

import BuyCardImage from "Assets/images/agreement/BuyCardImage.png";

export const SellerFirstPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Template>
      <div className="xs:pt-30 pt-5 xs:pb-[150px] pb-[100px] px-5">
        <div className="lg:w-[1000px] mx-auto w-full">
          <div>
            <div className="stepLabelTitle">Congratulations!</div>
            <div className="mt-5 introText">
              You’ve confirmed you wish to work in partnership with
              <span className="font-semibold text-green-70">
                {" "}
                Football Funder
              </span>
              , and the asset is theirs pending contract signing and payment to
              you.
              <br />
              <br /> As the seller, please fill out your details and select
              ‘Sign contract’. The buyer will then be able to countersign and
              pay for the asset. You will be notified when the buyer has
              countersigned and processed payment. 
              <br />
              <br /> We will then coordinate with you and them on artwork and
              anything else to bring the agreement to life.
            </div>
          </div>
          <div className="xs:w-[500px]">
            <div>
              <div className="mt-30 stepLabelTitle">Buyer</div>
              <div className="mt-5 p-15 bg-gray-20 rounded-10">
                <div className="introText">Organisation name</div>
                <div className="buttonText text-gren-70">Football Funder</div>
              </div>
              <div className="mt-30 stepLabelTitle">Seller</div>
              <div className="mt-30">
                <BuyerCard image={BuyCardImage} cost="£3000" />
              </div>
              <div className="mt-30">
                <div>
                  <div className="buttonText text-green-70">Organisation</div>
                  <div className="mt-5">
                    <Input data={NameData} name="name" disabled={true} />
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <div>
                  <div className="buttonText text-green-70">Address line 1</div>
                  <div className="mt-5">
                    <div className="flex gap-2.5">
                      <div className="w-1/2">
                        <Input data={PostcodeData} name="post_code" />
                      </div>
                      <div className="w-1/2">
                        <Input data={AddressData} name="address_line1" />
                      </div>
                    </div>
                    <div className="mt-2.5">
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
              <div className="mt-30">
                <div>
                  <div className="buttonText text-green-70">Address line 2</div>
                  <div className="mt-5">
                    <div className="flex gap-2.5">
                      <div className="w-1/2">
                        <Input data={PostcodeData} name="post_code" />
                      </div>
                      <div className="w-1/2">
                        <Input data={AddressData} name="address_line2" />
                      </div>
                    </div>
                    <div className="mt-2.5">
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
              <div className="mt-30">
                <div>
                  <div className="buttonText text-green-70">
                    Legal contact information
                  </div>
                  <div className="mt-5 flex flex-col gap-2.5">
                    <Input data={FirstNameData} name="first_name" />
                    <Input data={LastNameData} name="last_name" />
                    <DropdownInput
                      data={ContactPhoneNumberData}
                      name="phone_number"
                    />
                    <Input data={AccountEmailData} name="email" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end xs:mt-[60px] mt-30">
            <div className="xs:w-[250px] w-full">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                text="Sign contract"
                textColor="text-green-70"
                textSize="buttonText"
                width="w-full"
                handleClick={() => navigate(SELLERFINAL_URL)}
              />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
