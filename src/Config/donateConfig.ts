import { CardLabelType,RadioButtonDataType } from "types";
import { FaRegUserCircle, } from 'react-icons/fa'
import { BiMap } from 'react-icons/bi'

export const DonateClubLabel: CardLabelType = {
    icon:FaRegUserCircle,
    backgroundColor: "bg-green-80",
    textColor: "text-green-10",
    text: "Coxhoe Athletic FC",
}

export const DonateLocationLabel: CardLabelType = {
    icon:BiMap,
    backgroundColor: "bg-green-80",
    textColor: "text-white", 
    text: "Durham, England",
}

export const DonateCreateAccountConfirm: RadioButtonDataType[] = [
    {
        label: "I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy",
        value:"confirm policy"
    },
    {
        label: "I would like to sign up to receive newsletters from Football Funder. See Privacy Policy.",
        value:"see policy"
    },
]
export const DonatePaymentConfirm: RadioButtonDataType[] = [
    {
        label: "I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy",
        value:"confirm policy"
    },
]

export const SelectAnonymous:RadioButtonDataType[] = [
    {
        label: "Keep me anonymous",
        value: "yes",
        classes:"gap-[10px] flex-row-reverse justify-end"
    },
];