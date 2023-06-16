import React from "react";

export const ForgotPasswordStepFirst: React.FC = () => {
  return (
    <div>
      <div
        className="
       flex flex-col items-center  max-xs:items-start px-5 ns:mt-[60px] mt-[90px]
       mb-30 mx-auto"
      >
        <div className="generalTitle">I've forgotten my password</div>
        <div className="mt-15 introText">
          If you're logged out and can't remember your password, we can send you
          an email with a link to reset it.
        </div>
      </div>
    </div>
  );
};
