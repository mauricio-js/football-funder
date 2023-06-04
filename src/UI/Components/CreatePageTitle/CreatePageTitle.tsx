import React from "react";
import { TextButton } from "UI";
import { CreatePageTitleType } from "types/ComponentsTypes/createPageTitleType";

export const CreatePageTitle: React.FC<CreatePageTitleType> = (props) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="titleText">{props.title}</div>
      {props.introText && (
        <div className=" flex justify-between max-md:flex-col gap-y-[10px]">
          <div className="introText">{props.introText}</div>
          <div className="flex gap-1">
            <div className="introText">{props.linkText}</div>
            <TextButton text="Log in here." />
          </div>
        </div>
      )}
    </div>
  );
};
