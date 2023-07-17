import React, { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { ContactPhoneNumberData } from "Config";
// import { AppState } from "./reducers";
import { useSelector } from "react-redux";
import { UserStateType } from "Data/User";

interface FormStepperContextProps {
  formValues: { [key: string]: string | null };
  handleInputChange: (name: string, value: string | null) => void;
  selectValue: { [key: string]: number };
  handleSelectInput: (name: string, value: number) => void;
  dateList: { [key: string]: Date | null };
  handleDateChange: (name: string, value: Date | null) => void;
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
  rewardArray: any;
  addRewardData: (rewardData: any) => void;
  deleteRewardData: (index: number) => void;
  handleSetCrrRewardId: (id: string) => void;
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
  const { userInfo }: { userInfo: UserStateType } = useSelector(
    (state: any) => state.user
  );

  const { organization } = userInfo;

  const [formValues, setFormValues] = useState<{
    [key: string]: string | null;
  }>({
    category_id: userInfo.category_id.toString(),
    org_name: organization?.name || "",
    org_address1: organization?.address1 || "",
    org_address2: organization?.address2 || "",
    org_phone_number: organization?.phone_number || "",
    org_city: organization?.city || "",
    org_country: organization?.country || "",
    org_post_code: organization?.post_code || "",
    address_line1: userInfo?.address_line1 || "",
    address_line2: userInfo?.address_line2 || "",
    city: userInfo?.city || "",
    post_code: userInfo?.post_code || "",
    country: userInfo?.country || "",
    phone_number: userInfo?.phone_number || "",
    first_name: userInfo?.first_name || "",
    last_name: userInfo?.last_name || "",
    email: userInfo?.email || "",
    password: "",
  });

  // const [fundraiserformValues, setfundraiserFormValues] = useState<{
  //   [key: string]: string | null;
  // }>({
  //   user_id: "",
  //   title: "",
  //   description: "",
  //   amount: "",
  //   about: "",
  //   titleImgLink: "",
  //   titleImgName: "",
  //   pitchImgLink: "",
  //   pitchImgName: "",
  //   pitchVideoLink: "",
  //   pitchVideoName: "",
  //   overlayImgLink: "",
  //   overlayImgName: "",
  //   promote: "",
  //   reward_ids: "",
  // });

  useEffect(() => {
    setFormValues((preValue) => ({
      ...preValue,
      category_id: userInfo.category_id.toString(),
      org_name: organization?.name || "",
      org_address1: organization?.address1 || "",
      org_address2: organization?.address2 || "",
      org_phone_number: organization?.phone_number || "",
      org_city: organization?.city || "",
      org_country: organization?.country || "",
      org_post_code: organization?.post_code || "",
      address_line1: userInfo?.address_line1 || "",
      address_line2: userInfo?.address_line2 || "",
      city: userInfo?.city || "",
      post_code: userInfo?.post_code || "",
      country: userInfo?.country || "",
      phone_number: userInfo?.phone_number || "",
      first_name: userInfo?.first_name || "",
      last_name: userInfo?.last_name || "",
      email: userInfo?.email || "",
    }));
  }, [userInfo, organization]);

  const [selectValue, setSelectValue] = useState<{ [key: string]: number }>({
    category: 1,
    nation: 1,
    fundraiser_category: 1,
    fundraiser_nation: 1,
    advertiser_category: 1,
    advertiser_nation: 1,
    sponsor_category: 1,
    sponsor_nation: 1,
    delivery: 0,
    ecc_communication: 0,
  });
  const [dateList, setDateList] = useState<{ [key: string]: Date | null }>({});
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
    [key: string]: Array<number>;
  }>({});
  const [rewardArray, setRewardArray] = useState<any>([]);
  const [crrRewardId, setCrrRewardId] = useState<string>("");

  const handleInputChange = (name: string, value: string | null) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSelectInput = (name: string, value: number) => {
    // if (selectValue[name] === undefined) {
    //   selectValue[name] = 1;
    // }
    setSelectValue((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleDateChange = (name: string, date: Date | null): void => {
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
    // if (selectedCheckbox[name] === undefined) {
    //   selectedCheckbox[name] = [];
    // }
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
      updatedSelectedCheckbox[name] = filteredData || [];
    }
    setSelectedCheckbox(updatedSelectedCheckbox);
  };

  const addRewardData = (rewardData: any) => {
    const existingRewardIndex = rewardArray.findIndex(
      (item: any) => item.id === crrRewardId
    );
    if (existingRewardIndex !== -1) {
      const updatedRewardArray = [...rewardArray];
      updatedRewardArray[existingRewardIndex] = rewardData;
      setRewardArray(updatedRewardArray);
      setCrrRewardId("");
    } else {
      const newRewardData = {
        ...rewardData,
        id: uuid(),
      };
      setRewardArray([...rewardArray, newRewardData]);
      setCrrRewardId("");
    }
  };

  const deleteRewardData = (id: number) => {
    const updatedRewardArray = rewardArray.filter(
      (item: any) => item.id !== id
    );
    setRewardArray(updatedRewardArray);
  };

  const handleSetCrrRewardId = (id: string) => {
    setCrrRewardId(id);
  };

  return (
    <FormStepperContext.Provider
      value={{
        formValues,
        handleInputChange,
        selectValue,
        handleSelectInput,
        dateList,
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
        addRewardData,
        rewardArray,
        deleteRewardData,
        handleSetCrrRewardId,
      }}
    >
      {children}
    </FormStepperContext.Provider>
  );
};
