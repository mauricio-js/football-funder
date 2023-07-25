import { useState } from "react";
import classNames from "classnames";

interface orderProps {
  inputValue: string;
  number: number;
  setInputValue: (number: number, value: string) => void;
  textareaValue: string;
  setTextareaValue: (number: number, value: string) => void;
}

export const Perks: React.FC<orderProps> = ({
  inputValue,
  number,
  setInputValue,
  textareaValue,
  setTextareaValue,
}) => {
  const [floating, setFloating] = useState<boolean>(false);

  const handleFocus = () => {
    setFloating(true);
  };

  const handleBlur = () => {
    setFloating(false);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(number, value);
  };
  const setFormattedContent = (text: string) => {
    setTextareaValue(number, text.slice(0, 300));
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="relative">
          <input
            type="text"
            value={inputValue || ""}
            className={classNames(
              "relative bg-white w-full rounded-10 z-10 pt-3 px-3",
              "transition duration-200 ease-linear border-2 border-gray-200 ",
              "appearance-none focus:outline-none",
              "text-green-70 h-[54px] text-[16px] leading-[22px]"
            )}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />

          <label
            htmlFor="floating_standard"
            className={classNames(
              "absolute left-3  top-[calc(50%-10px)] origin-[0_0] pointer-events-none text-sm  z-10",
              "duration-200 ease-linear ",
              floating || inputValue ? "scale-75 -translate-y-2.5" : " ",
              "text-gray-10",
              "after:content-['*'] after:ml-1 after:text-green-10 "
            )}
          >
            Perk title
          </label>
        </div>
      </div>
      <div className="mt-2.5">
        <div className="relative">
          <textarea
            className={classNames(
              "w-full   rounded-10 border-2",
              "border-gray-200 focus:outline-none box-border  overflow:auto resize-none",
              "generalText px-[14px] pb-4 h-[124px] pt-6 ",
              "h-[150px]"
            )}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              setFormattedContent(event.target.value);
            }}
            value={textareaValue || ""}
            required={false}
          />
          <div
            className={classNames(
              "absolute bottom-[10px] right-[10px] text-[10px] leading-[14px]",
              " hidden vs:block text-green-70",
              !textareaValue && "text-opacity-50"
            )}
          >
            {textareaValue ? textareaValue.length : 0}/{300} characters left
          </div>

          <div className="absolute top-[12px] px-[16px] hidden vs:block">
            <div
              className={classNames(
                "text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10",
                !textareaValue && "text-opacity-50"
              )}
            >
              Perk description
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
