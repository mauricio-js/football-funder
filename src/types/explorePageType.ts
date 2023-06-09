import { IconType } from "react-icons/lib"

export interface ExploreDropdownType { 
    id: number,
    name:string
}

export interface CardLabelType { 
    backgroundColor: string,
    textColor: string,
    text: string,
    icon:IconType
}

export interface CardType {
    desktopimage: string,
    mobileimage?: string,
    broadcastingType: string,
    vat?:string,
    club: CardLabelType,
    location: CardLabelType,
    title: string,
    description: string,
    progress?: boolean,
    fund?: string,
    curFund?: number,
    oriFund?: number,
    date: CardLabelType,
    collection?: CardLabelType
};

export interface DistanceDataType { 
    id?: number;
    label: string;
    type: string;
}

export interface RadioButtonDataType { 
    label: string;
    value: string;
    classes?: string;
}