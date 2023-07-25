import React, { createContext, useState } from "react";
import { ContactPhoneNumberData } from "Config";
// import { useSelector } from "react-redux";
// import { UserStateType } from "Data/User";

interface Perk {
  title: string;
  description: string;
}

interface FormStepperContextProps {
  // register value context
  registerValue: { [key: string]: any };
  handleRegisterValue: (key: string, value: any) => void;
  fundraierRegisterValue: { [key: string]: any };
  handleFundraiserRegisterValue: (key: string, value: any) => void;
  advertisingRegisterValue: { [key: string]: any };
  handleAdvertisingRegisterValue: (key: string, value: any) => void;
  sponsorshipRegisterValue: { [key: string]: any };
  handleSponsorshipRegisterValue: (key: string, value: any) => void;
  // create list context
  createFundraiserValue: { [key: string]: any };
  handleCreateFundraiserValue: (key: string, value: any) => void;
  handleCreateFundraiserPromote: (value: any) => void;
  rewardIdArray: any;
  handleRewardIdArray: (value: any) => void;
  createAdvertisingValue: { [key: string]: any };
  handleCreateAdvertisingValue: (key: string, value: any) => void;
  handleCreateAdvertisingPromote: (value: any) => void;
  createSponsorshipValue: { [key: string]: any };
  handleCreateSponsorshipValue: (key: string, value: any) => void;
  handleCreateSponsorshipPromote: (value: any) => void;
  // login value context
  loginValue: { [key: string]: any };
  handleLoginValue: (key: string, value: any) => void;
  // update password context
  updatePasswordValue: { [key: string]: any };
  handleUpdatePasswordValue: (key: string, value: any) => void;
  // forgot password value context
  forgotPasswordValue: { [key: string]: any };
  handleForgotPasswordValue: (key: string, value: any) => void;
  // account update value context
  fundraiserAccountUpdateValue: { [key: string]: any };
  handleFundraiserAccountUpdateValue: (key: string, value: any) => void;
  advertisingAccountUpdateValue: { [key: string]: any };
  handleAdvertisingAccountUpdateValue: (key: string, value: any) => void;
  sponsorshipAccountUpdateValue: { [key: string]: any };
  handleSponsorshipAccountUpdateValue: (key: string, value: any) => void;
  //  isLoading context
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  // button click context
  isClickedAddrewardBtn: boolean;
  handleClickAddrewardBtn: () => void;
  handleClickNoAddrewardBtn: () => void;
  // add perk component context
  clickCount: number;
  setClickCount: (value: number) => void;
  clickedComponents: number[];
  setClickedComponets: (value: number[]) => void;
  perkTitle: { [number: number]: string };
  setPerkTitle: React.Dispatch<
    React.SetStateAction<{ [number: number]: string }>
  >;
  handlePerkTitle: (number: number, value: string) => void;
  perkDesc: { [number: number]: string };
  setPerkDesc: React.Dispatch<
    React.SetStateAction<{ [number: number]: string }>
  >;
  handlePerkDesc: (number: number, value: string) => void;
  perkArray: Perk[];
  setPerkArray: React.Dispatch<React.SetStateAction<Perk[]>>;
  // handleAddmoreBtnClick: () => void;
  // fundraiser donate
  donateValue: { [key: string]: any };
  handleDonateValue: (key: string, value: any) => void;
  // ads sale
  adsSaleValue: { [key: string]: any };git
  handleAdsSaleValue: (key: string, value: any) => void;
  // sponsorship sale
  sponsorshipSaleValue: { [key: string]: any };
  handleSponsorshipSaleValue: (key: string, value: any) => void;
  // checkout
  checkoutValue: { [key: string]: any };
  handleCheckoutValue: (key: string, value: any) => void;
  // agreement
  buyerValue: { [key: string]: any };
  handleBuyerValue: (key: string, value: any) => void;
  sellerValue: { [key: string]: any };
  handleSellerValue: (key: string, value: any) => void;
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
  // const { userInfo }: { userInfo: UserStateType } = useSelector(
  //   (state: any) => state.user
  // );

  // const { organization } = userInfo;

  // const [inputValue, setinputValue] = useState<{
  //   [key: string]: string | null;
  // }>({
  //   category_id: userInfo.category_id.toString(),
  //   org_name: organization?.name || "",
  //   org_address_line1: organization?.address1 || "",
  //   org_address_line2: organization?.address2 || "",
  //   org_phone_number: organization?.phone_number || "",
  //   org_city: organization?.city || "",
  //   org_country: organization?.country || "",
  //   org_post_code: organization?.post_code || "",
  //   address_line1: userInfo?.address_line1 || "",
  //   address_line2: userInfo?.address_line2 || "",
  //   city: userInfo?.city || "",
  //   post_code: userInfo?.post_code || "",
  //   country: userInfo?.country || "",
  //   phone_number: userInfo?.phone_number || "",
  //   first_name: userInfo?.first_name || "",
  //   last_name: userInfo?.last_name || "",
  //   email: userInfo?.email || "",
  //   password: "",
  // });

  // useEffect(() => {
  //   setinputValue((preValue) => ({
  //     ...preValue,
  //     category_id: userInfo.category_id.toString(),
  //     org_name: organization?.name || "",
  //     org_address1: organization?.address1 || "",
  //     org_address2: organization?.address2 || "",
  //     org_phone_number: organization?.phone_number || "",
  //     org_city: organization?.city || "",
  //     org_country: organization?.country || "",
  //     org_post_code: organization?.post_code || "",
  //     address_line1: userInfo?.address_line1 || "",
  //     address_line2: userInfo?.address_line2 || "",
  //     city: userInfo?.city || "",
  //     post_code: userInfo?.post_code || "",
  //     country: userInfo?.country || "",
  //     phone_number: userInfo?.phone_number || "",
  //     first_name: userInfo?.first_name || "",
  //     last_name: userInfo?.last_name || "",
  //     email: userInfo?.email || "",
  //     profile_url: userInfo?.profile_url || "",
  //   }));
  // }, [userInfo, organization]);

  // const userId = fundraiserinputValue.user_id;

  // const handleUpdateFundraiserinputValue = (key: string, value: any) => {
  //   setfundraiserinputValue({
  //     ...fundraiserinputValue,
  //     [key]: value,
  //   });
  // };

  //  register context
  const loginBaseValue = {
    email: "",
    password: "",
  };
  const registerBaseValue = {
    ...loginBaseValue,
    category_id: 1,
    nation: 1,
    org_name: "",
    org_address1: "",
    org_address2: "",
    org_phone_number: "",
    org_pn_country: ContactPhoneNumberData[0].country,
    org_city: "",
    org_country: "",
    org_post_code: "",
    first_name: "",
    last_name: "",
    address_line1: "",
    address_line2: "",
    city: "",
    post_code: "",
    country: "",
    phone_number: "",
    pn_country: ContactPhoneNumberData[0].country,
    confirm_password: "",
    profile_url: "",
    birth_date: "",
  };
  const [registerValue, setRegisterValue] = useState<{
    [key: string]: any;
  }>({
    ...registerBaseValue,
    email_communication: 1,
  });
  const handleRegisterValue = (key: string, value: any) => {
    setRegisterValue({
      ...registerValue,
      [key]: value,
    });
  };
  const [fundraierRegisterValue, setFundraiserRegisterValue] = useState<{
    [key: string]: any;
  }>({
    ...registerBaseValue,
  });
  const handleFundraiserRegisterValue = (key: string, value: any) => {
    setFundraiserRegisterValue({
      ...fundraierRegisterValue,
      [key]: value,
    });
  };
  const [advertisingRegisterValue, setAdvetisingRegisterValue] = useState<{
    [key: string]: any;
  }>({
    ...registerBaseValue,
  });
  const handleAdvertisingRegisterValue = (key: string, value: any) => {
    setAdvetisingRegisterValue({
      ...advertisingRegisterValue,
      [key]: value,
    });
  };
  const [sponsorshipRegisterValue, setSponsorshipRegisterValue] = useState<{
    [key: string]: any;
  }>({
    ...registerBaseValue,
  });
  const handleSponsorshipRegisterValue = (key: string, value: any) => {
    setSponsorshipRegisterValue({
      ...sponsorshipRegisterValue,
      [key]: value,
    });
  };
  // login context
  const [loginValue, setLoginValue] = useState<{ [key: string]: any }>({
    ...loginBaseValue,
  });
  const handleLoginValue = (key: string, value: any) => {
    setLoginValue({
      ...loginValue,
      [key]: value,
    });
  };
  // update password context
  const [updatePasswordValue, setUpdatePasswordValue] = useState<{
    [key: string]: any;
  }>({
    password: "",
    email: "",
    new_password: "",
    confirm_password: "",
  });
  const handleUpdatePasswordValue = (key: string, value: any) => {
    setUpdatePasswordValue({
      ...updatePasswordValue,
      [key]: value,
    });
  };
  // account update context
  const [fundraiserAccountUpdateValue, setFundraiserAccountUpdateValue] =
    useState<{
      [key: string]: any;
    }>({
      ...registerBaseValue,
    });
  const handleFundraiserAccountUpdateValue = (key: string, value: any) => {
    setFundraiserAccountUpdateValue({
      ...fundraiserAccountUpdateValue,
      [key]: value,
    });
  };
  const [advertisingAccountUpdateValue, setAdvertisingAccountUpdateValue] =
    useState<{
      [key: string]: any;
    }>({
      ...registerBaseValue,
    });
  const handleAdvertisingAccountUpdateValue = (key: string, value: any) => {
    setAdvertisingAccountUpdateValue({
      ...advertisingAccountUpdateValue,
      [key]: value,
    });
  };
  const [sponsorshipAccountUpdateValue, setSponsorshipAccountUpdateValue] =
    useState<{
      [key: string]: any;
    }>({
      ...registerBaseValue,
    });
  const handleSponsorshipAccountUpdateValue = (key: string, value: any) => {
    setSponsorshipAccountUpdateValue({
      ...sponsorshipAccountUpdateValue,
      [key]: value,
    });
  };
  // forgot password context
  const [forgotPasswordValue, setForgotPasswordValue] = useState<{
    [key: string]: any;
  }>({
    email: "",
  });
  const handleForgotPasswordValue = (key: string, value: any) => {
    setForgotPasswordValue({
      ...forgotPasswordValue,
      [key]: value,
    });
  };
  //  create list context
  const listBaseValue = {
    title: "",
    description: "",
    amount: "",
    titleImgLink: "",
    titleImgName: "",
    pitchImgLink: "",
    pitchImgName: "",
    pitchVideoLink: "",
    pitchVideoName: "",
    promote: false,
  };
  const otherBaseValue = {
    ...listBaseValue,
    vat_fee: 1,
    sPeriodDate: "",
    lPeriodDate: "",
    commencementDate: "",
    perks: "",
  };
  const [createFundraiserValue, setCreateFundraiserValue] = useState<{
    [key: string]: any;
  }>({
    ...listBaseValue,
    about: "",
    overlayImgLink: "",
    overlayImgName: "",
    reward_ids: "",
  });

  const handleCreateFundraiserValue = (key: string, value: any) => {
    setCreateFundraiserValue({
      ...createFundraiserValue,
      [key]: value,
    });
  };
  const handleCreateFundraiserPromote = () => {
    setCreateFundraiserValue({
      ...createFundraiserValue,
      promote: !createFundraiserValue.promote,
    });
  };
  const [rewardIdArray, setRewardIdArray] = useState<any>([]);
  const handleRewardIdArray = (rewardID: any) => {
    setRewardIdArray((preValue: any) => [...preValue, rewardID]);
    handleCreateFundraiserValue("reward_ids", rewardIdArray);
  };
  // const handleRewardId = (key: string, rewardID: any) => {
  //   setCreateFundraiserValue({
  //     ...rewardID,
  //     [key]: rewardID,
  //   });
  // };

  const [createAdvertisingValue, setCreateAdvertisingValue] = useState<{
    [key: string]: any;
  }>({
    ...otherBaseValue,
    adsNumber: "",
  });
  const handleCreateAdvertisingValue = (key: string, value: any) => {
    setCreateAdvertisingValue({
      ...createAdvertisingValue,
      [key]: value,
    });
  };
  const handleCreateAdvertisingPromote = () => {
    setCreateAdvertisingValue({
      ...createAdvertisingValue,
      promote: !createAdvertisingValue.promote,
    });
  };
  const [createSponsorshipValue, setCreateSponsorshipValue] = useState<{
    [key: string]: any;
  }>({
    ...otherBaseValue,
  });

  const handleCreateSponsorshipValue = (key: string, value: any) => {
    setCreateSponsorshipValue({
      ...createSponsorshipValue,
      [key]: value,
    });
  };
  const handleCreateSponsorshipPromote = () => {
    setCreateSponsorshipValue({
      ...createSponsorshipValue,
      promote: !createSponsorshipValue.promote,
    });
  };

  // fundraiser donate
  const [donateValue, setDonateValue] = useState<{ [key: string]: any }>({
    first_name: "",
    last_name: "",
    birth_date: "",
    phone_number: "",
    post_code: "",
    address: "",
    country: "",
    email: "",
    password: "",
    confirm_password: "",
    donation_amount: "",
    amount: "",
    anonymous: 1,
    comment: "",
    payment_method: 1,
    card_number: "",
    expiry: "",
    cvc: "",
  });
  const handleDonateValue = (key: string, value: any) => {
    setDonateValue({
      ...donateValue,
      [key]: value,
    });
  };

  // advertising sale
  const [adsSaleValue, setAdsSaleValue] = useState<{ [key: string]: any }>({
    full_name: "",
    org_name: "",

    first_name: "",
    last_name: "",
    birth_date: "",
    phone_number: "",
    post_code: "",
    address: "",
    country: "",
    email: "",
    password: "",
    confirm_password: "",
    donation_amount: "",
    amount: "",
    anonymous: 1,
    comment: "",
    payment_method: 1,
    card_number: "",
    expiry: "",
    cvc: "",
  });
  const handleAdsSaleValue = (key: string, value: any) => {
    setAdsSaleValue({
      ...adsSaleValue,
      [key]: value,
    });
  };
  // sponsorship sale
  const [sponsorshipSaleValue, setSponsorshipSaleValue] = useState<{
    [key: string]: any;
  }>({
    full_name: "",
    org_name: "",

    first_name: "",
    last_name: "",
    birth_date: "",
    phone_number: "",
    post_code: "",
    address: "",
    country: "",
    email: "",
    password: "",
    confirm_password: "",
    donation_amount: "",
    amount: "",
    anonymous: 1,
    comment: "",
    payment_method: 1,
    card_number: "",
    expiry: "",
    cvc: "",
  });
  const handleSponsorshipSaleValue = (key: string, value: any) => {
    setSponsorshipSaleValue({
      ...sponsorshipSaleValue,
      [key]: value,
    });
  };
  // checkout
  const [checkoutValue, setCheckoutValue] = useState<{ [key: string]: any }>({
    fist_name: "",
    last_name: "",
    phone_numebr: "",
    address: "",
    country: "",
    payment_method: 1,
    card_number: "",
    expiry: "",
    cvc: "",
    post_code: "",
  });
  const handleCheckoutValue = (key: string, value: any) => {
    setCheckoutValue({
      ...checkoutValue,
      [key]: value,
    });
  };
  // agreement
  const [buyerValue, setBuyerValue] = useState<{ [key: string]: any }>({
    payment_method: "",
    card_number: "",
    expiry: "",
    cvc: "",
    post_code: "",
    name: "",
    post_code1: "",
    address1: "",
    country1: "",
    post_code2: "",
    address2: "",
    country2: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });
  const handleBuyerValue = (key: string, value: any) => {
    setBuyerValue({
      ...buyerValue,
      [key]: value,
    });
  };

  const [sellerValue, setSellerValue] = useState<{ [key: string]: any }>({
    name: "",
    post_code: "",
    address_line1: "",
    country1: "",
    post_code2: "",
    address_line2: "",
    country2: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });
  const handleSellerValue = (key: string, value: any) => {
    setSellerValue({
      ...sellerValue,
      [key]: value,
    });
  };

  // const addRewardData = (rewardData: any) => {
  //   const existingRewardIndex = rewardArray.findIndex(
  //     (item: any) => item.id === crrRewardId
  //   );
  //   if (existingRewardIndex !== -1) {
  //     const updatedRewardArray = [...rewardArray];
  //     updatedRewardArray[existingRewardIndex] = rewardData;
  //     setRewardArray(updatedRewardArray);
  //     setCrrRewardId("");
  //   } else {
  //     const newRewardData = {
  //       ...rewardData,
  //       id: uuid(),
  //     };
  //     setRewardArray([...rewardArray, newRewardData]);
  //     setCrrRewardId("");
  //   }
  // };

  // const deleteRewardData = (id: number) => {
  //   const updatedRewardArray = rewardArray.filter(
  //     (item: any) => item.id !== id
  //   );
  //   setRewardArray(updatedRewardArray);
  // };

  // const handleSetCrrRewardId = (id: string) => {
  //   setCrrRewardId(id);
  // };

  const [isLoading, setIsLoading] = useState(false);
  const [isClickedAddrewardBtn, setIsClickAddrewardBtn] = useState(false);
  const [clickCount, setClickCount] = useState<number>(1);
  const [clickedComponents, setClickedComponets] = useState<number[]>([0]);
  const [perkTitle, setPerkTitle] = useState<{ [number: number]: string }>({});
  const [perkDesc, setPerkDesc] = useState<{
    [number: number]: string;
  }>({});
  const [perkArray, setPerkArray] = useState<Perk[]>([]);

  const handlePerkTitle = (number: number, value: string) => {
    setPerkTitle((preValue) => ({
      ...preValue,
      [number]: value,
    }));
  };
  const handlePerkDesc = (number: number, value: string) => {
    setPerkDesc((preValue) => ({
      ...preValue,
      [number]: value,
    }));
  };
  // const handleAddmoreBtnClick = () => {
  //   const newperks: Perk = {
  //     title: perkDesc[clickCount] || "",
  //     description: perkTitle[clickCount] || "",
  //   };
  //   setPerkArray([...perkArray, newperks]);
  //   setClickCount(clickCount + 1);
  //   setClickedComponets([...clickedComponents, clickCount]);
  //   console.log(clickCount, clickedComponents, perkArray);
  // };
  const handleClickAddrewardBtn = () => {
    setIsClickAddrewardBtn(true);
  };
  const handleClickNoAddrewardBtn = () => {
    setIsClickAddrewardBtn(false);
  };

  return (
    <FormStepperContext.Provider
      value={{
        // register value
        registerValue,
        handleRegisterValue,
        fundraierRegisterValue,
        handleFundraiserRegisterValue,
        advertisingRegisterValue,
        handleAdvertisingRegisterValue,
        sponsorshipRegisterValue,
        handleSponsorshipRegisterValue,
        // login value
        loginValue,
        handleLoginValue,
        // update password
        updatePasswordValue,
        handleUpdatePasswordValue,
        // forgot password value
        forgotPasswordValue,
        handleForgotPasswordValue,
        // account update value
        fundraiserAccountUpdateValue,
        handleFundraiserAccountUpdateValue,
        advertisingAccountUpdateValue,
        handleAdvertisingAccountUpdateValue,
        sponsorshipAccountUpdateValue,
        handleSponsorshipAccountUpdateValue,
        // create fundriser value
        createFundraiserValue,
        handleCreateFundraiserValue,
        rewardIdArray,
        handleRewardIdArray,
        handleCreateFundraiserPromote,
        // create advertising value
        createAdvertisingValue,
        handleCreateAdvertisingValue,
        handleCreateAdvertisingPromote,
        // create sponsorship value
        createSponsorshipValue,
        handleCreateSponsorshipValue,
        handleCreateSponsorshipPromote,
        // isLoading
        isLoading,
        setIsLoading,
        //add reward button click
        isClickedAddrewardBtn,
        handleClickAddrewardBtn,
        handleClickNoAddrewardBtn,
        // add perk component
        clickCount,
        setClickCount,
        clickedComponents,
        setClickedComponets,
        perkTitle,
        setPerkTitle,
        handlePerkTitle,
        perkDesc,
        setPerkDesc,
        handlePerkDesc,
        perkArray,
        setPerkArray,
        // handleAddmoreBtnClick,
        // fundraiser donate
        donateValue,
        handleDonateValue,
        // ads sale
        adsSaleValue,
        handleAdsSaleValue,
        // sponsorship sale
        sponsorshipSaleValue,
        handleSponsorshipSaleValue,
        // checkout
        checkoutValue,
        handleCheckoutValue,
        // agreement
        buyerValue,
        handleBuyerValue,
        sellerValue,
        handleSellerValue,
      }}
    >
      {children}
    </FormStepperContext.Provider>
  );
};
