import React, { useState } from 'react';
import SelectForm from '../SelectForm/SelectForm';
import OrganisationForm from 'UI/Components/SignUp/organisationForm';
import IndividualForm from 'UI/Components/SignUp/individualForm';

const SignUpSelectForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const signUpSelectFormData = [
    {
      id: 1,
      label: 'Select your category *',
      value: 'default',
    },

    {
      id: 2,
      label: 'Organisation',
      value: 'organisation',
    },
    {
      id: 3,
      label: 'Individual',
      value: 'individual',
    },
  ];

  return (
    <div className="mt-[18px]">
      <div className="text-base leading-[22px] font-normal text-center text-green-10">
        Sign up for early access
      </div>

      <div className="h-[50px]">
        <div
          className="
                mt-[15px] mx-auto
                w-[390px] md:w-[527px] max-ns:w-[280px]
                h-[54px] sm:h-[91px]"
        >
          <SelectForm
            SelectFormData={signUpSelectFormData}
            selectedOption={selectedOption}
            onOptionChange={handleSelectChange}
          />
        </div>
      </div>
      <div>
        {selectedOption === 'organisation' && (
          <div className="h-[545px]">
            <div
              className="
                mt-[15px] mx-auto
                w-[390px] md:w-[527px] max-ns:w-[280px]
                h-[54px] sm:h-[91px]"
            >
              {/* <SelectForm
                SelectFormData={signUpSelectFormData}
                selectedOption={selectedOption}
                onOptionChange={handleSelectChange}
              /> */}
              {selectedOption === 'organisation' && <OrganisationForm />}
              {/* {selectedOption === 'individual' && <IndividualForm />} */}
            </div>
          </div>
        )}
      </div>
      <div>
        {selectedOption === 'individual' && (
          <div className="h-[417px]">
            <div
              className="
                mt-[15px] mx-auto
                w-[390px] md:w-[527px] max-ns:w-[280px]
                h-[54px] sm:h-[91px]"
            >
              {/* <SelectForm
                SelectFormData={signUpSelectFormData}
                selectedOption={selectedOption}
                onOptionChange={handleSelectChange}
              /> */}
              {selectedOption === 'individual' && <IndividualForm />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpSelectForm;
