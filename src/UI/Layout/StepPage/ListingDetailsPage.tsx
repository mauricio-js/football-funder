import React, { useState } from "react";
import {
  DatePicker,
  PageSectionTitle,
  PageTitle,
  RadioButtonList,
  AmountShow,
  StepLabel,
  Textarea,
} from "UI";
import {
  CommencementDateDate,
  EndPeriodDateData,
  IncludingVatData,
  StartPeriodDateData,
} from "Config";
import { StepNumberPropsType } from "types";

export const ListingDetailsPage: React.FC<StepNumberPropsType> = ({
  stepNumber,
}) => {
  const [fundraiserAmount, setFundraiserAmount] = useState<number>(350);
  const [includingVat, setIncludingVat] = useState<string>("yes");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [startPeriod, setStartPeriod] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [endPeriod, setEndPeriod] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commencement, setCommencement] = useState<string>("");

  return (
    <div className="w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5 mb-[90px] max-ns:mb-30 mx-auto">
      <PageTitle title="Create your fundraiser" />

      <div className="mt-30 ">
        <StepLabel number={stepNumber} title="Listing details" />
      </div>
      <div className="mt-30">
        <PageSectionTitle
          title="Advertising listing title"
          intro="What would you like the title of your listing to be?"
        />
      </div>
      <div className="xs:w-[500px] flex flex-col gap-30">
        <div>
          <div className="mt-15">
            <Textarea
              title="Title"
              limit={150}
              height="h-[124px]"
              value="Vel amet iaculis id adipiscing venenatis sed volutpat. Dictumst sem pellentesque lectus sollicitudin."
              showLeftCharacters={true}
            />
          </div>
        </div>
        <div>
          <PageSectionTitle
            title="Amount"
            intro="Place the amount you want for your advertisement."
          />
          <div className="mt-15">
            <AmountShow
              amount={fundraiserAmount}
              setAmount={setFundraiserAmount}
            />
          </div>
        </div>

        <div className="">
          <PageSectionTitle
            title="VAT"
            intro="Does this price include or exclude VAT?"
          />
          <div className="mt-15">
            <RadioButtonList
              options={IncludingVatData}
              currentValue={includingVat}
              onSelect={setIncludingVat}
              classes="flex flex-col gap-[15px]"
            />
          </div>
        </div>
        <div>
          <PageSectionTitle
            title="Period of time"
            intro="Please select the time period you want your advertisement to last."
          />
          <div className="mt-15 flex gap-2.5">
            <div className="w-1/2">
              <DatePicker
                data={StartPeriodDateData}
                setValue={setStartPeriod}
                defaultValue=""
              />
            </div>
            <div className="w-1/2">
              <DatePicker
                data={EndPeriodDateData}
                setValue={setEndPeriod}
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div>
          <PageSectionTitle
            title="Commencement date (optional)"
            intro="If you have a date in mind for when the advert will be available, please select below."
          />
          <div className="mt-15">
            <DatePicker
              data={CommencementDateDate}
              setValue={setCommencement}
              defaultValue=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
