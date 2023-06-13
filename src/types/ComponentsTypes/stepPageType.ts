export interface StepPagePropsType {
  isAuth: boolean;
  contactText: string;
  showAccountDetails: boolean;
  showOrganisation: boolean;
  showProfileURL: boolean;
  showConfirmation: boolean;
  showModifyAlert: boolean;
  stepNumber: string;
  stepTitle: string;
}
export interface StepNumberPropsType {
  stepNumber: string;
}

export interface FinalTouchedPagePropsType { 
  stepNumber: string;
  isCrowdFundingPage:boolean
}
// export interface ListingDetailsPagePropsType { 
//   stepNumber: string;
//   isCrowdFundingPage:boolean
// }
export interface AddDetailsStepPagePropsType { 
  stepNumber: string;
  advertNumber: boolean;
  addPerk: boolean;
  descriptionTitle: string;
  titleImage: string;
  pitchImage: string;
}
