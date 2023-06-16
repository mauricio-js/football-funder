import React, { useState } from "react";
import { AccountEmailData } from "Config";
import { Input } from "UI";

export const ForgotPasswordStepSecond: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountEmail, setAccountEmail] = useState<string>("");
  return (
    <div>
      <div
        className="
       flex flex-col items-center  max-xs:items-start px-5 ns:mt-[60px] mt-[90px]
       mb-30 mx-auto"
      >
        <div className="generalTitle">Reset password</div>
        <div className="mt-15 introText">
          Just enter the email address you registered with and we’ll send you a
          link to reset your password.
        </div>
        <div className="mt-30 xs:w-[500px] w-full">
          <Input
            data={AccountEmailData}
            setValue={setAccountEmail}
            defaultValue=""
          />
        </div>
      </div>
    </div>
  );
};
