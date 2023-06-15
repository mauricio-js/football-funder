import React from "react";
import { TextButton, Template } from "UI";

export const SigninPage: React.FC = () => {
  return (
    <Template>
      <div className=" w-[1000px] max-lg:w-full px-5 mb-[120px] max-ns:mb-30 mx-auto sm:mt-[60px] mt-[90px]">
        <div className=" xs:w-[500px]">
          <div className="generalTitle">Welcome back</div>
          <div className="mt-15 flex">
            <div className="introText">New to Football Funder?</div>
            <TextButton text="Sign Up" />
          </div>
        </div>
      </div>
    </Template>
  );
};
