import { RadioButtonDataType} from 'types';
import { CardLabelType } from 'types'
import { FaRegUserCircle } from 'react-icons/fa'
import { BiMap } from 'react-icons/bi'

export const SaleClubLabel: CardLabelType = {
    icon:FaRegUserCircle,
    backgroundColor: "bg-green-80",
    textColor: "text-green-10",
    text: "Coxhoe Athletic FC",
}

export const SaleLocationLabel: CardLabelType = {
    icon:BiMap,
    backgroundColor: "bg-green-80",
    textColor: "text-white", 
    text: "Durham, England",
}

export const SaleAccountConfirm: RadioButtonDataType[] = [
    {
        label: "I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy",
        value:"confirm policy"
    },
    {
        label: "I would like to sign up to receive newsletters from Football Funder. See Privacy Policy.",
        value:"see policy"
    },
]
export const SaleEnquiryConfirm: RadioButtonDataType[] = [
    {
        label: "I consent to the details of this account being passed to the rights holder to initiate contact should they wish to engage further on the opportunity.",
        value:"confirm policy"
    },
]