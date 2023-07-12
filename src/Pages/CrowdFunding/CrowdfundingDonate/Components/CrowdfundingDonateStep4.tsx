import React, { useState } from "react";
import {
  GeneralCheckBoxList,
  Button,
  Input,
  PageSectionTitle,
  PageTitle,
  RadioButtonList,
  StepperBackButton,
  StepLabel,
  VerticalCardLabel,
} from "UI";
import {
  CardNumberData,
  DonateClubLabel,
  DonateLocationLabel,
  DonatePaymentConfirm,
  ExpiryData,
  CvcData,
  PostcodeData,
  PaymentMethodData,
} from "Config";
import { StepperActionPropsType } from "types";
import { MdAnnouncement } from "react-icons/md";
import PayCardA from "Assets/images/checkout/paycard-a.svg";
import PayCardB from "Assets/images/checkout/paycard-b.svg";
import PayCardC from "Assets/images/checkout/paycard-c.svg";
import PayCardD from "Assets/images/checkout/paycard-d.svg";
import PayCardE from "Assets/images/checkout/paycard-e.svg";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const CrowdfundingDonateStep4: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<number>();

  const [btnActive, setBtnActive] = useState<boolean>(false);

  const handleClickPaymentMethodBtn = () => {
    setBtnActive(!btnActive);
  };
  return (
    <form>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[150px] max-ns:mb-[100px] mx-auto"
      >
        <PageTitle title="Donate to this fundraiser" />
        <div className="mt-6">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-9">
          <PageSectionTitle title="Running a crowdfunding campaign for my football club" />
          <div className="mt-2.5">
            <div className="flex flex-row max-vs:flex-col gap-2.5">
              <VerticalCardLabel cardLabelData={DonateClubLabel} />
              <VerticalCardLabel cardLabelData={DonateLocationLabel} />
            </div>
          </div>
        </div>
        <div className="mt-30">
          <StepLabel number="Step 4" title="Payment details" />
        </div>
        <div className="mt-30 xs:w-[500px]">
          <div>
            <PageSectionTitle title="Total to pay" />
            <div className="mt-15">
              <div className="mt-15 rounded-10 bg-gray-20 p-15">
                <div className="introText">Donation amount</div>
                <div className="mt-[5px] buttonText text-green-70">￡46.00</div>
              </div>
            </div>
          </div>
          <div className="mt-30 flex gap-2.5">
            <button>
              <img src={PayCardA} alt="paycarda" />
            </button>
            <button>
              <img src={PayCardB} alt="paycardb" />
            </button>
            <button>
              <img src={PayCardC} alt="paycardc" />
            </button>
            <button>
              <img src={PayCardD} alt="paycardd" />
            </button>
            <button>
              <img src={PayCardE} alt="paycarde" />
            </button>
          </div>
          <div className="mt-30">
            <PageSectionTitle title="Payment method" />
            <div className="mt-15">
              <RadioButtonList
                options={PaymentMethodData}
                currentValue={paymentMethod}
                onSelect={setPaymentMethod}
                classes="flex gap-[15px]"
                textStyle="text-base"
                checkboxStyle={false}
              />
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle title="Card details" />
            {!btnActive ? (
              <div className="mt-15 flex flex-col gap-2.5">
                <Input data={CardNumberData} name="card_number" />
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input data={ExpiryData} name="expiry" />
                  </div>
                  <div className="w-1/2">
                    <Input data={CvcData} name="cvc" />
                  </div>
                </div>
                <Input data={PostcodeData} name="post_code" />
              </div>
            ) : (
              <div className="mt-15 w-full">
                <div className="bg-gray-20 rounded-10 h-[80px] p-15">
                  <div className="h-full flex items-center gap-5">
                    <BsFillCheckCircleFill className="text-green-10" />
                    <img src={PayCardA} alt="paycarda" className="scale-150" />
                    <div className="flex flex-col gap-2.5">
                      <div className="buttonText text-green-70 password">
                        ••••1234
                      </div>
                      <div className="smallIntroText">Expires 02/2025</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-5">
              <Button
                backgroundColor="bg-white"
                border="border-[1px] border-black"
                height="h-[50px]"
                width="w-full"
                text={
                  btnActive
                    ? "Add new payment method"
                    : "Save as payment method"
                }
                textColor="text-green-70"
                textSize="buttonText"
                handleClick={handleClickPaymentMethodBtn}
              />
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle title="Confirmation" />
            <div className="mt-[15px]">
              <GeneralCheckBoxList
                options={DonatePaymentConfirm}
                textStyle="introText"
                name="donate_payment_confirm"
              />
            </div>
          </div>
        </div>
        <div className="xs:mt-[60px] mt-30">
          <div className="flex xs:justify-end max-md:flex-col-reverse items-center gap-2.5">
            <div
              className="h-[50px] max-xs:w-full w-[320px] px-4 bg-gray-200 rounded-10 
              flex items-center gap-[10px] generalSmallText text-green-80"
            >
              <MdAnnouncement />
              Your card will be charged immediately.
            </div>
            <div className="md:w-[250px] xs:w-[320px] w-full">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Process payment securely"
                textColor="text-green-70"
                textSize="buttonText"
                handleClick={handleNextPage}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
