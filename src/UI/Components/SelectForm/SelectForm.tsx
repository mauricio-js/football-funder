import React from 'react';
import SelectFormArrow from 'Assets/images/svg/select-form-arrow';

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

const SelectForm: React.FC<Props> = ({ selectedOption, onOptionChange, SelectFormData }) => {
  // initTE({ Select });
  return (
    <div className="relative">
      <select
        name="select form"
        id="id-select"
        value={selectedOption}
        onChange={onOptionChange}
        placeholder=""
        className="h-14 px-4 py-3 appearance-none  text-white rounded-10 bg-green-80 active:border-green-30 focus-visible:outline-none focus-visible:border-green-30 w-full focus:border-green-30"
      >
        {SelectFormData.map((formData, index) => {
          return (
            <option key={index} value={formData.value} className="">
              {formData.label}
            </option>
          );
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
        <SelectFormArrow />
      </div>
    </div>
  );
};

export default SelectForm;
