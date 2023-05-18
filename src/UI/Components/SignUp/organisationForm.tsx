import React from 'react';
import InputForm from '../InputForm/InputForm';

const OrganisationForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 mt-7">
      <div className="text-white text-sm text-center">
        Please fill the requested information below
      </div>
      <InputForm label="First Name" type="text" />
      <InputForm label="Last Name" type="text" />
      <InputForm label="Organisation Name" type="text" />
      <InputForm label="Email" type="email" />
      <InputForm label="Website" type="text" />
      <div className="bg-green-10 py-3 font-semibold rounded-10 text-center ">Sign Up</div>
    </div>
  );
};

export default OrganisationForm;
