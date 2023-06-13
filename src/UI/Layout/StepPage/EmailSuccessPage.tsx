import React from "react";
// import { Button } from "UI";

export const EmailSuccessPage: React.FC = () => {
  return (
    <div>
      <div className="sm:mt-[60px] mt-[80px] 2xs:mb-[50px] mb-[30px]">
        <div className="w-[520px] max-xs:w-full mx-auto max-xs:px-5">
          <div className="titleText text-center max-xs:text-start">
            Email confirmed successfully
          </div>
          {/* <div className="mt-30 mx-auto">
            <div className="xs:w-[390px] w-full mx-auto">
              <Button
                backgroundColor="bg-green-10"
                width="w-full"
                height="h-[50px]"
                text="Continue"
                textColor="text-green-70"
                textSize="text-[16px] leading-5 font-semibold"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
