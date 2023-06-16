import React, { useState } from "react";
import { AccountConfirmPasswordData, AccountPasswordData } from "Config";
import { Input } from "UI";

export const ForgotPasswordStepThird: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountConfirmPassword, setAccountConfirmPassword] =
    useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountPassword, setAccountPassword] = useState<string>("");

  return (
    <div>
      <div
        className="
       flex flex-col items-center   max-xs:items-start px-5 ns:mt-[60px] mt-[90px]
       mb-30 mx-auto"
      >
        <div className="generalTitle">Add new password</div>
        <div className="mt-15 introText">Enter your new password.</div>
        <div className="mt-30 xs:w-[500px] w-full flex flex-col gap-2.5">
          <Input
            data={AccountPasswordData}
            setValue={setAccountPassword}
            defaultValue=""
          />
          <Input
            data={AccountConfirmPasswordData}
            setValue={setAccountConfirmPassword}
            defaultValue=""
          />
        </div>
      </div>
    </div>
  );
};
