import React from "react";
import SelectFormArrow from "Assets/images/svg/white-arrow";
import classname from "classnames";

interface SelectFormData {
  id: number;
  label: string;
  value: string;
}

interface Props {
  SelectFormData: SelectFormData[];
  selectedOption: string;
  onOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<Props> = ({
  selectedOption,
  onOptionChange,
  SelectFormData,
}) => {
  return (
    <div className="relative w-full">
      <select
        name="select form"
        id="floating_filled"
        onChange={onOptionChange}
        value={selectedOption}
        placeholder=""
        className=" h-14 px-5 py-3 appearance-none w-full text-xl text-white rounded-10 bg-green-80 block border-0 dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer"
      >
        <option className="hidden"></option>
        {SelectFormData.map((formData, index) => {
          return (
            <option key={index} value={formData.value} className="block w-full">
              {formData.label}
            </option>
          );
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
        <SelectFormArrow />
      </div>
      <label
        htmlFor="floating_filled"
        className={classname(
          "absolute text-sm text-white duration-300 transform scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
          selectedOption !== "" && "-translate-y-4"
        )}
      >
        Select you category
        <span className="text-green-10 ml-1">*</span>
      </label>
    </div>
  );
};
