import React, { createContext, useState } from "react";
import { ContactPhoneNumberData } from "Config";

interface FormStepperContextProps {
  formValues: { [key: string]: string };
  handleInputChange: (name: string, value: string) => void;
  selectValue: { [key: string]: number };
  handleSelectInput: (name: string, value: number) => void;
  dateList: { [key: string]: Date };
  setDateList: (dateList: { [key: string]: Date }) => void;
  handleDateChange: (name: string, value: Date) => void;
  descriptionList: { [key: string]: string };
  handleDescriptionChange: (name: string, intro: string) => void;
  amount: { [key: string]: number };
  handleAmountChange: (name: string, value: number) => void;
  selectedImage: { [key: string]: File | null };
  handleSelectedImage: (name: string, file: File | null) => void;
  countryPhoneNumber: string;
  setCountryPhoneNumber: (value: string) => void;
  selectedCheckbox: { [key: string]: number[] };
  handleSelectedCheckbox: (name: string, value: number) => void;
}

interface FormStepperPropsType {
  children: React.ReactNode;
}

const placeholder = {} as FormStepperContextProps;
export const FormStepperContext =
  createContext<FormStepperContextProps>(placeholder);

export const FormStepperProvider: React.FC<FormStepperPropsType> = ({
  children,
}) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [selectValue, setSelectValue] = useState<{ [key: string]: number }>({
    fundraiser_category: 1,
    fundraiser_nation: 1,
    advertiser_category: 1,
    advertiser_nation: 1,
    sponsor_category: 1,
    sponsor_nation: 1,
  });
  const [dateList, setDateList] = useState<{ [key: string]: Date }>({});
  const [descriptionList, setDescriptionList] = useState<{
    [key: string]: string;
  }>({});
  const [amount, setAmountList] = useState<{ [key: string]: number }>({});
  const [selectedImage, setSelectedImage] = useState<{
    [key: string]: File | null;
  }>({});
  const [countryPhoneNumber, setCountryPhoneNumber] = useState<string>(
    ContactPhoneNumberData[0].country
  );
  const [selectedCheckbox, setSelectedCheckbox] = useState<{
    [key: string]: number[];
  }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSelectInput = (name: string, value: number) => {
    setSelectValue((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleDateChange = (name: string, date: Date): void => {
    setDateList((preValue) => ({
      ...preValue,
      [name]: date,
    }));
  };

  const handleDescriptionChange = (name: string, intro: string) => {
    setDescriptionList((preValue) => ({
      ...preValue,
      [name]: intro,
    }));
  };

  const handleAmountChange = (name: string, value: number) => {
    setAmountList((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSelectedImage = (name: string, value: File | null) => {
    setSelectedImage((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSelectedCheckbox = (name: string, value: number) => {
    if (selectedCheckbox[name] === undefined) {
      selectedCheckbox[name] = [];
    }
    const index = selectedCheckbox[name]?.findIndex((val) => val === value);
    const updatedSelectedCheckbox = { ...selectedCheckbox };
    if (index < 0) {
      updatedSelectedCheckbox[name] = [
        ...(selectedCheckbox[name] || []),
        value,
      ];
    } else {
      const filteredData = selectedCheckbox[name]?.filter(
        (val) => val !== value
      );
      updatedSelectedCheckbox[name] = filteredData;
    }
    setSelectedCheckbox(updatedSelectedCheckbox);
  };
  return (
    <FormStepperContext.Provider
      value={{
        formValues,
        handleInputChange,
        selectValue,
        handleSelectInput,
        dateList,
        setDateList,
        handleDateChange,
        descriptionList,
        handleDescriptionChange,
        amount,
        handleAmountChange,
        selectedImage,
        handleSelectedImage,
        countryPhoneNumber,
        setCountryPhoneNumber,
        handleSelectedCheckbox,
        selectedCheckbox,
      }}
    >
      {children}
    </FormStepperContext.Provider>
  );
};
