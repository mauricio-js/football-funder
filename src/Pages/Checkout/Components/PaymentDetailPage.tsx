import React, { useState } from "react";
import {
  Input,
  PageSectionTitle,
  PageTitle,
  RadioButtonList,
  StepLabel,
} from "UI";
import {
  CardNumberData,
  ExpiryData,
  CvcData,
  PostcodeData,
  PaymentMethodData,
} from "Config";
import { MdAnnouncement } from "react-icons/md";
import PayCardA from "Assets/images/checkout/paycard-a.png";
import PayCardB from "Assets/images/checkout/paycard-b.png";
import PayCardC from "Assets/images/checkout/paycard-c.png";
import PayCardD from "Assets/images/checkout/paycard-d.png";
import PayCardE from "Assets/images/checkout/paycard-e.png";

export const PaymentDetailPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-30 mx-auto"
    >
      <PageTitle title="Checkout" />
      <div className="mt-30">
        <StepLabel number="Step 3" title="Payment details" />
      </div>
      <div className="mt-30 xs:w-[500px]">
        <div>
          <PageSectionTitle title="Total to pay" />
          <div className="mt-15">
            <div className="rounded-10 border-[1px] border-gray-200 bg-gray-100 p-15 flex justify-between">
              <div className="introText">Amount</div>
              <div className="valueText">£35.98</div>
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
          <div className="mt-15 flex flex-col gap-2.5">
            <Input
              data={CardNumberData}
              setValue={setCardNumber}
              defaultValue={cardNumber}
            />
            <div className="flex gap-[10px]">
              <div className="w-1/2">
                <Input
                  data={ExpiryData}
                  setValue={setExpiry}
                  defaultValue={expiry}
                />
              </div>
              <div className="w-1/2">
                <Input data={CvcData} setValue={setCvc} defaultValue={cvc} />
              </div>
            </div>
            <Input
              data={PostcodeData}
              setValue={setPostcode}
              defaultValue={postcode}
            />
            <div className="mt-5">
              <button className="w-full border-[1px] rounded-10 buttonText text-green-70 border-green-70 py-15">
                Save as payment method
              </button>
            </div>
            <div className="mt-30">
              <div
                className="px-15 xs:py-[15px] py-2 w-full bg-gray-200 rounded-10 
              flex items-center gap-[10px] generalSmallText text-green-80"
              >
                <div className="w-[14px] h-[14px]">
                  <MdAnnouncement />
                </div>
                You can modify your fundraiser details at any time after
                posting.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
