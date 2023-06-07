import React from "react";
import { Button } from "UI";

interface AddAwardPanelProps {
  handleClick: (value: boolean) => void;
  reward: boolean;
}

export const AddAwardPanel: React.FC<AddAwardPanelProps> = ({
  handleClick,
}) => {
  const AddAward = () => {
    handleClick(true);
  };
  const NoneAddAward = () => {
    handleClick(false);
  };
  return (
    <div className="ns:w-[410px] w-full p-15 bg-gray-50">
      <div className="text-[16px] leading-[20px] font-semibold text-green-70">
        Would you like to add rewards to your fundraiser?
      </div>
      <div className="mt-15">
        <div className="flex justify-center gap-[10px]">
          <Button
            backgroundColor="bg-green-10"
            height="h-[50px]"
            width="w-[175px]"
            textColor="text-green-70"
            textSize="text-[16px] leading-[20px] font-semibold"
            text="Yes"
            handleClick={AddAward}
          />
          <Button
            backgroundColor="bg-green-70"
            height="h-[50px]"
            width="w-[175px]"
            textColor="text-white"
            textSize="text-[16px] leading-[20px] font-semibold"
            text="No"
            handleClick={NoneAddAward}
          />
        </div>
      </div>
    </div>
  );
};
