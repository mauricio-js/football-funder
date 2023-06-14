export interface BasinInformationPagePropsType {
  contactText: string;
  isAuth: boolean;
  pageTitle: string;
  showAccountDetails: boolean;
  showOrganisation: boolean;
  showProfileURL: boolean;
  showConfirmation: boolean;
  showModifyAlert: boolean;
  stepNumber: string;
  stepTitle: string;
}
export interface StepPagePropsType {
  pageTitle: string;
  stepNumber: string;
}

export interface FinalTouchedPagePropsType { 
  isCrowdFundingPage:boolean
  stepNumber: string;
}
export interface ListingDetailsPagePropsType {
  description: boolean;
  listingTitle: string;
  pageTitle:string
  stepNumber: string;
}
export interface AddDetailsStepPagePropsType { 
  addPerk: boolean;
  descriptionTitle: string;
  pageTitle: string;
  pitchImage: string;
  stepNumber: string;
  titleImage: string;
  isShowDesciptionPanel: boolean;
  isShowAdvertNum:boolean
}
