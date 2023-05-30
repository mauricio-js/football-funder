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

export interface ExploreCardType {
    desktopimage: string,
    mobileimage: string,
    broadcastingType: string,
    vat?:string,
    club: CardLabelType,
    location: CardLabelType,
    title: string,
    description: string,
    progress?:boolean,
    fund?: string,
    status?: string,
    date: CardLabelType,
    collection?: CardLabelType
};