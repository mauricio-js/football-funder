import React from "react";

interface CardData {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  buttonName: string;
}

interface Props {
  Value: CardData;
}

export const DropdownMenuCard: React.FC<Props> = ({ Value }) => {
  return (
    <div className="">
      <div
        className="bg-cover bg-no-repeat bg-center h-[224px] w-[490px] max-2xs:w-[390px] max-2xs:rounded-10 mx-auto "
        style={{
          backgroundImage: `url(${Value.backgroundImage})`,
        }}
      >
        <div className="pr-56 max-2xs:pr-[142px] pl-[25px] py-[20px]">
          <div className="text-white font-semibold text-[21px] leading-[28px]">
            {Value.title}
          </div>
          <div className="mt-[10px] text-green-10 font-medium text-[16px] leading-[22px]">
            {Value.description}
          </div>
          <div className="mt-9">
            <button className="rounded-10 bg-white font-semibold text-base w-[138px] h-[42px]">
              {Value.buttonName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
