import { InputType, RadioButtonDataType } from "types"
export const ProfileURLData: InputType = { 
        id: 1,
        border:"focus:border-2",
        label: "Custom URL",
        height: "h-[54px]",
        padding: " px-3 py-4",
        textSize: "generalText",
        type: "text",
}

export const AdsNumberData: InputType = {

    id: 1,
    label: "Number of Ads",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    padding:" px-3 py-4",
    type: "text",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const PerkTitleData: InputType = {

    id: 1,
    label: "Perk title",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    padding:" px-3 py-4",
    type: "text",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}

export const FinalTouchPageCheckboxData:RadioButtonDataType[] = [
    {
        label: "I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy.",
        value: "confirmPolicy",
    },
    {
        label: "I agree for the commercial contact to be contacted by phone or email from interested parties, and that the use of the enquiry form will share details with interested parties.",
        value: "agreeConact",
    },
    {
        label: "I acknowledge that for the listing to be marked as sold, Football Funder will ask whether the placement was sold successfully or not, and who to.",
        value: "acknowledgeToAsk",
    },
];