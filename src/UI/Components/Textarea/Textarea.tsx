import React, { useContext } from "react";
import { FormStepperContext } from "App/FormStepperProvider";
import classNames from "classnames";

interface Props {
  name: string;
  chattingField?: boolean;
  className?: string;
  value?: string;
  limit?: number;
  showLeftCharacters: boolean;
  title?: string;
  titleStyle?: string;
  height?: string;
  placeholder?: string;
}

export const Textarea: React.FC<Props> = ({
  chattingField,
  className,
  limit,
  title,
  titleStyle,
  height,
  showLeftCharacters,
  placeholder,
  name,
}) => {
  const { descriptionList, handleDescriptionChange } =
    useContext(FormStepperContext)!;

  const setFormattedContent = (text: string) => {
    handleDescriptionChange(name, text.slice(0, limit));
  };

  return (
    <div className="relative">
      <textarea
        className={classNames(
          "w-full   rounded-10 border-2",
          "border-gray-200 focus:outline-none box-border  overflow:auto resize-none",
          "placeholder:text-[12px] placeholder:leading-[14px] placeholder:font-medium placeholder:text-gray-10",
          placeholder ? "pt-2.5" : "pt-6",
          chattingField ? className : "generalText px-[14px] pb-4 h-[124px] ",
          height
        )}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setFormattedContent(event.target.value);
        }}
        value={descriptionList[name]}
        placeholder={placeholder}
      />
      {showLeftCharacters && (
        <div
          className={classNames(
            "absolute bottom-[10px] right-[10px] text-[10px] leading-[14px]",
            " hidden vs:block text-green-70",
            !descriptionList[name] && "text-opacity-50"
          )}
        >
          {descriptionList[name] ? descriptionList[name].length : 0}/{limit}{" "}
          characters left
        </div>
      )}
      {title && (
        <div className="absolute w-full top-[12px] px-[16px] hidden vs:block">
          <div
            className={classNames(
              titleStyle,
              !descriptionList[name] && "text-opacity-50"
            )}
          >
            {title}
          </div>
        </div>
      )}
    </div>
  );
};
