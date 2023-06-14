import { InputType, RadioButtonDataType } from "types"
export const StartPeriodDateData: InputType = {
        id: 1,
        label: "Select a period",
        height: "h-[54px]",
        textSize: "generalText",
        padding: " px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const EndPeriodDateData: InputType = {
        id: 2,
        label: "Select a period",
        height: "h-[54px]",
        textSize: "generalText",
        padding: " px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const CommencementDateDate: InputType = {
        id: 1,
        label: "Pick a date",
        height: "h-[54px]",
        textSize: "generalText",
        padding: " px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}

export const IncludingVatData:RadioButtonDataType[] = [
        {
            label: "Includes VAT",
            value: "yes",
            classes:"gap-[10px] flex-row-reverse justify-end"
        },
        {
            label: "Excludes VAT",
            value: "no",
            classes:"gap-[10px] flex-row-reverse justify-end",
        },
       
];